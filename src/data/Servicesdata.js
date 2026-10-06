import webImg from "../assets/media/services/webImg.webp";
import brandingImg from "../assets/media/services/brandingImg.webp";
import videoImg from "../assets/media/services/videoImg.webp";
import contentImg from "../assets/media/services/ContentWritingImg.webp";



const services = [
    {
        image: webImg,
        number: "01",
        title: "Web Design & Development",
        description:
            "We design and build fast, mobile-friendly websites in Dehradun that turn visitors into paying customers - not just websites that look good and do nothing.",
        features: [
            {
                title: "Custom Business Websites",
                desc: "Fully custom-coded sites built around your brand, not a generic template.",
            },
            {
                title: "Landing Pages",
                desc: "High-converting single pages for campaigns, launches, or lead generation.",
            },
            {
                title: "Portfolio Websites",
                desc: "Clean, visual-first sites for creators, studios, and personal brands.",
            },
            {
                title: "Google Business Profile Setup",
                desc: "We set up and optimize your listing so you show up on Google Search & Maps.",
            },
        ],
    },
    {
        image: videoImg,
        number: "02",
        title: "Video Editing",
        description:
            "From raw footage to scroll-stopping content - we edit reels, YouTube videos, and ad creatives that actually hold attention.",
        features: [
            {
                title: "Instagram Reels",
                desc: "Fast-paced, trend-aware edits built to boost reach and engagement.",
            },
            {
                title: "YouTube Videos",
                desc: "Long-form editing with pacing, sound design, and clean cuts.",
            },
            {
                title: "Promotional Ad Edits",
                desc: "Punchy video creatives ready to run - we edit, you decide where it runs.",
            },
            {
                title: "Motion Graphics",
                desc: "Text animations, transitions, and overlays that add polish to any edit.",
            },
        ],
    },
    {
        image: brandingImg,
        number: "03",
        title: "Graphic Design",
        description:
            "A consistent, memorable visual identity - from your logo to every piece of content your brand puts out.",
        features: [
            {
                title: "Logo Design",
                desc: "A distinct mark that represents your brand across every platform.",
            },
            {
                title: "Brand Identity",
                desc: "Colors, fonts, and visual guidelines that keep your brand consistent.",
            },
            {
                title: "Social Media Post Design",
                desc: "Ready-to-post creatives designed for your feed - posting isn't included.",
            },
            {
                title: "Posters & Brochures",
                desc: "Print or digital-ready designs for offers, events, and business promotion.",
            },
        ],
    },
    {
        image: contentImg,
        number: "04",
        title: "Content Writing",
        description:
            "Words that actually sell - we craft story-driven, SEO-ready content that builds trust and moves your audience to act.",
        features: [
            {
                title: "Storytelling",
                desc: "Brand narratives that connect emotionally and make your business memorable.",
            },
            {
                title: "Copywriting",
                desc: "Persuasive website, ad, and product copy written to convert readers into customers.",
            },
            {
                title: "Blog Writing",
                desc: "SEO-friendly blogs that bring organic traffic and position you as an authority.",
            },
            {
                title: "Social Media Captions",
                desc: "Scroll-stopping captions and content copy tailored to each platform's tone.",
            },
        ],
    },
];

export default services;