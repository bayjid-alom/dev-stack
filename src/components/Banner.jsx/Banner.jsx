
import { ArrowRight, BookOpen } from "lucide-react";
import bannerImage from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid w-[92%] max-w-[1408px] items-center gap-8 py-8 sm:py-16 md:w-[90%] md:grid-cols-[1.1fr_0.9fr] md:gap-4 md:py-20 lg:w-[88%] lg:gap-8 lg:py-18">

        {/* Banner Content */}
        <div className="order-1 relative z-10 flex flex-col items-start">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-pink-600">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
            Build Your Perfect Tech Stack
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[60px] xl:text-[68px]">
            Build Your Ideal
            <span className="mt-1 block bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text pb-1 text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#technologies"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-pink-600 to-pink-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/25 active:translate-y-0"
            >
              Explore Technologies
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-pink-200 hover:bg-pink-50/70 hover:text-pink-600"
            >
              <BookOpen size={16} strokeWidth={1.8} />
              Learn More
            </a>
          </div>

          <p className="mt-5 text-xs font-medium text-slate-400">
            Find the right tools. Build something great.
          </p>
        </div>

        {/* Large Banner Illustration */}
        <div className="order-2 relative flex min-h-[280px] items-center justify-center md:min-h-[380px] lg:min-h-[460px]">
          {/* Soft background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/40 blur-[70px] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80" />

          <img
            src={bannerImage}
            alt="3D development technology stack"
            className="relative z-10 h-auto w-full max-w-[380px] object-contain drop-shadow-[0_20px_35px_rgba(124,58,237,0.12)] transition-transform duration-500 ease-out hover:-translate-y-2 sm:max-w-[440px] md:max-w-none md:scale-[1.08] lg:scale-[1.15] xl:scale-[1.2]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
