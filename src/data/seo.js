export const SITE_URL = "https://siradigital.vercel.app";
export const SITE_NAME = "SIRA Digital";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.webp`;
export const BRAND_LOGO = `${SITE_URL}/logo.webp`;

export const seoByPath = {
  "/": {
    title: "SIRA Digital | Web Development & Creative Digital Agency",
    description: "SIRA Digital builds fast, modern websites, branding, video content, and digital experiences that help businesses attract customers and grow online.",
    type: "website",
  },
  "/services": {
    title: "Web Development, Branding & Video Editing Services | SIRA Digital",
    description: "Explore SIRA Digital services for business websites, web development, branding, graphic design, video editing, content writing, and digital presence in Dehradun and across India.",
    type: "website",
  },
  "/about": {
    title: "About SIRA Digital | Web Development & Creative Agency",
    description: "Meet SIRA Digital and learn how we combine web development, branding, design, and video to build stronger digital identities for growing brands.",
    type: "website",
  },
  "/ourwork": {
    title: "SIRA Digital Portfolio | Websites, Branding & Creative Work",
    description: "Explore selected SIRA Digital work across business websites, branding, graphic design, video editing, and modern digital experiences.",
    type: "website",
  },
  "/blogs": {
    title: "SIRA Digital Blog | Web Design, Branding & Digital Growth",
    description: "Practical insights from SIRA Digital on websites, branding, content, video editing, and digital growth for modern businesses.",
    type: "website",
  },
  "/contact": {
    title: "Contact SIRA Digital | Start Your Website or Branding Project",
    description: "Talk to SIRA Digital about website development, branding, graphic design, video editing, or content for your business or brand in Dehradun and across India.",
    type: "website",
  },
};

export const getSeoForPath = (path) => seoByPath[path] ?? seoByPath["/"];
