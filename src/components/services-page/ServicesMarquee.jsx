// src/components/services-page/ServicesMarquee.jsx
import { Sparkles } from "lucide-react";

const services = [
  "Website Design & Development",
  "Brand Identity & Graphic Design",
  "Video Editing & Motion Graphics",
  "UI/UX Design",
  "Content-Led Digital Marketing",
];

const marqueeServices = [...services, ...services];

export default function ServicesMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)]/10 bg-[var(--accent-light)] py-4">
      <div className="marquee-track flex w-max items-center gap-10 px-6">
        {marqueeServices.map((service, index) => (
          <div
            key={`${service}-${index}`}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles size={15} className="text-[var(--accent)]" />
            <span className="text-sm font-semibold tracking-wide text-[var(--text-h)]">
              {service}
            </span>
            <span className="ml-8 h-1.5 w-1.5 rounded-full bg-[var(--accent)]/40" />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: services-marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes services-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}