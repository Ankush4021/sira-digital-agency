import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import blogPosts from "../data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  // Agar galat/purana URL ho to friendly message dikhao
  if (!post) {
    return (
      <section className="pt-40 pb-24 px-6 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-(--text-h)">Post not found</h1>
        <p className="mt-4 text-(--text)">
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-flex items-center gap-2 text-(--accent) font-medium"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <article className="pt-36 pb-24 px-6 max-w-3xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-(--accent)"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <span className="mt-6 inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
          {post.category}
        </span>

        <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-(--text-h)">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-5 text-sm text-(--text)/70">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <div className="mt-10 h-64 md:h-96 w-full overflow-hidden rounded-3xl bg-(--accent-light)">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          decoding="async" />
        </div>

        {/* Content - har paragraph blank line se split hoke render hota hai */}
        <div className="mt-10 space-y-5">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-(--text) leading-8 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-(--accent-light) p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            Ready to build?
          </p>
          <h2 className="mt-3 text-2xl font-bold text-(--text-h)">
            Turn the idea into something customers can actually use.
          </h2>
          <p className="mt-3 leading-7 text-(--text)">
            Explore our services or talk to SIRA Digital about your next website, branding, or content project.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/services">
              <span className="inline-flex rounded-full bg-(--accent) px-5 py-3 text-sm font-semibold text-white">
                Explore Services
              </span>
            </Link>
            <Link to="/contact">
              <span className="inline-flex rounded-full border border-(--accent) px-5 py-3 text-sm font-semibold text-(--accent)">
                Start a Project
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </article>
  );
}