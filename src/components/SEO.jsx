import { useEffect } from "react";
import { BRAND_LOGO, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getSeoForPath } from "../data/seo";
import blogPosts from "../data/blogPosts";

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = (rel, href, attributes = {}) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const upsertSchema = (graph) => {
  let script = document.head.querySelector('script[data-sira-schema="true"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.siraSchema = "true";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
};

function SEO({ path }) {
  const cleanPath = path || "/";
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "/" : cleanPath}`;
  const seo = getSeoForPath(cleanPath);
  const blogId = cleanPath.startsWith("/blogs/") ? cleanPath.split("/").filter(Boolean)[1] : null;
  const blogPost = blogId ? blogPosts.find((post) => post.id === blogId) : null;
  const knownStaticPath = ["/", "/about", "/services", "/ourwork", "/blogs", "/contact"].includes(cleanPath);
  const shouldIndex = knownStaticPath || Boolean(blogPost);

  useEffect(() => {
    const pageSeo = blogPost
      ? {
          title: `${blogPost.title} | SIRA Digital`,
          description: blogPost.excerpt,
          type: "article",
        }
      : seo;

    document.title = pageSeo.title;
    upsertMeta("name", "description", pageSeo.description);
    upsertMeta("name", "robots", shouldIndex ? "index, follow" : "noindex, follow");
    upsertMeta("name", "theme-color", "#110719");

    upsertMeta("property", "og:type", pageSeo.type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", pageSeo.title);
    upsertMeta("property", "og:description", pageSeo.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageSeo.title);
    upsertMeta("name", "twitter:description", pageSeo.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    upsertLink("canonical", canonicalUrl);

    const graph = [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: BRAND_LOGO,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-87559-06346",
          contactType: "customer service",
          email: "support.siradigital@gmail.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lane 2B, Mahalaxmi Puram, Mothrowala",
          addressLocality: "Dehradun",
          addressRegion: "Uttarakhand",
          postalCode: "248001",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.instagram.com/siradigital.in",
          "https://www.linkedin.com/company/sira-digital-in/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        name: pageSeo.title,
        description: pageSeo.description,
        url: canonicalUrl,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
    ];

    if (cleanPath === "/services") {
      graph.push({
        "@type": "Service",
        "@id": `${SITE_URL}/services#service`,
        name: "Digital Services by SIRA Digital",
        provider: { "@id": `${SITE_URL}/#organization` },
        serviceType: [
          "Web Design & Development",
          "Video Editing",
          "Graphic Design",
          "Content Writing",
        ],
        areaServed: "India",
        url: `${SITE_URL}/services`,
      });
    }

    if (blogPost) {
      graph.push({
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: blogPost.title,
        description: blogPost.excerpt,
        datePublished: blogPost.date,
        dateModified: blogPost.date,
        image: [blogPost.image],
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      });
    }

    if (cleanPath !== "/") {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: blogPost ? "Blog" : pageSeo.title.split("|")[0].trim(),
            item: blogPost ? `${SITE_URL}/blogs` : canonicalUrl,
          },
          ...(blogPost
            ? [{
                "@type": "ListItem",
                position: 3,
                name: blogPost.title,
                item: canonicalUrl,
              }]
            : []),
        ],
      });
    }

    upsertSchema(graph);
  }, [blogId, blogPost, canonicalUrl, cleanPath, seo, shouldIndex]);

  return null;
}

export default SEO;
