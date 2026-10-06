import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import blogPosts from "../../data/blogPosts";

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

export default function LatestPosts() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section id="latest" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-flex rounded-full bg-(--accent-light) px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
          Latest Posts
        </span>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-(--text-h)">
          Fresh off the <span className="text-(--accent)">blog.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Featured post - larger card */}
        {featuredPost && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:row-span-2"
          >
            <Link
              to={`/blogs/${featuredPost.id}`}
              className="group block h-full overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="relative h-64 md:h-80 overflow-hidden bg-(--accent-light)">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy" decoding="async" />
                <span className="absolute top-5 left-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-(--accent) shadow-sm">
                  {featuredPost.category}
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-4 text-xs text-(--text)/70">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-(--text-h) leading-snug">
                  {featuredPost.title}
                </h3>

                <p className="mt-3 text-(--text) leading-7">
                  {featuredPost.excerpt}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--accent)">
                  Read Article
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Other posts - stacked smaller cards */}
        <div className="flex flex-col gap-8">
          {otherPosts.map((post) => (
            <motion.div key={post.id} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Link
                to={`/blogs/${post.id}`}
                className="group flex gap-5 rounded-3xl bg-white p-4 shadow-md hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-(--accent-light)">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy" decoding="async" />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="w-fit rounded-full bg-(--accent-light) px-3 py-1 text-[11px] font-semibold text-(--accent)">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-(--text-h) leading-snug">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-(--text)/70">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}