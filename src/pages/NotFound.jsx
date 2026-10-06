import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 pt-28 pb-20 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent)">404</p>
        <h1 className="mt-4 text-4xl font-bold text-(--text-h) md:text-6xl">Page not found.</h1>
        <p className="mt-5 leading-7 text-(--text)">The page you are looking for does not exist or may have moved.</p>
        <Link to="/" className="mt-8 inline-block">
          <PrimaryButton><span className="inline-flex items-center gap-2"><ArrowLeft size={16} /> Back Home</span></PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
