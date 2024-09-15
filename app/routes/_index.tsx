import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Sustainable Catering — Limantara Foundation" }];
};

export default function Index() {
  return (
    <main className="selection:bg-sky-700 selection:text-white">
      <div className="relative justify-between flex flex-col min-h-screen bg-[url('/img/naja-bertolt-jensen-isBu-nDo9-I-unsplash.jpg')] bg-top bg-cover">
        <div className="py-8 px-8 md:px-24 lg:px-40 backdrop-brightness-50">
          <header className="w-full flex flex-col gap-y-8 ">
            <img
              src="/logotype.svg"
              alt="Logo"
              className="w-40 selection:bg-transparent"
            />
            <hr className="border-2 border-white" />
          </header>
          <div className="text-center flex flex-col my-16">
            <p className="font-body text-2xl sm:text-3xl font-bold italic text-white selection:bg-white selection:text-black">
              Take action
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mt-4 md:mt-0 leading-[1] text-white selection:bg-white selection:text-black">
              For{" "}
              <span className="underline decoration-sky-600 selection:bg-white selection:text-black">
                sustainable
              </span>{" "}
              catering practices.
            </h1>
          </div>
        </div>
        <img
          src="/svg/wave.svg"
          className="w-full selection:bg-transparent bottom-0 backdrop-brightness-50"
          alt=""
        />
      </div>
      <div className="pt-16 bg-white relative">
        <div className="text-center pb-24 px-8 md:px-24 lg:px-40 flex flex-col gap-y-16 items-center">
          <p className="font-body text-2xl sm:text-3xl font-bold italic text-black">
            The Problem?
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] text-sky-600 selection:bg-black selection:text-sky-400">
            Single-use, non-biodegradable food containers.
          </h1>
          <p className="font-body text-2xl sm:text-3xl text-black text-left sm:w-4/5">
            Catering services use single-use plastic containers and disposable
            cutlery to serve food. While this is convenient — this practice
            contributes a significant amount to environmental pollution and
            creates a big waste of plastic.
          </p>
        </div>
        <img
          src="/svg/wave2.svg"
          className="w-full selection:bg-transparent"
          alt=""
        />
      </div>
      <div className="pt-16 bg-sky-700 relative">
        <div className="text-center pb-24 px-8 md:px-24 lg:px-40 flex flex-col gap-y-16 items-center">
          <p className="font-body text-2xl sm:text-3xl font-bold italic text-white selection:text-sky-700 selection:bg-white">
            The Solution?
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1] text-white selection:bg-black selection:text-white">
            Proper silverware and reusable, washable containers.
          </h1>
          <p className="font-body text-2xl sm:text-3xl text-white text-left sm:w-4/5 selection:text-sky-700 selection:bg-white">
            Using food containers for catered meals that can be collected,
            washed, and reused for future meals.
            <br />
            <br />
            For people who eat at the canteen, the food could be served on
            proper silverware that can be washed after use.
          </p>
        </div>
        <img
          src="/svg/wave3.svg"
          className="w-full selection:bg-transparent"
          alt=""
        />
      </div>
      <footer className="bg-neutral-800 px-8 md:px-24 lg:px-40 pb-24 flex flex-col gap-y-16">
        <div className="flex flex-row justify justify-between">
          <img
            src="/limantara-foundation.svg"
            alt="Limantara Foundation Logo"
            className="h-14 selection:bg-transparent"
          />
          <img
            src="/logotype.svg"
            alt="Sustainable Catering Logo"
            className="h-12 selection:bg-transparent"
          />
        </div>
        <hr className="border-neutral-500" />
        <div className="flex flex-col gap-y-4">
          <p className="font-body text-lg md:text-xl tracking-wide text-center">
            <span className="text-sky-300 selection:bg-white selection:text-sky-600">
              Sustainable Catering
            </span>{" "}
            is an Open-Source Resource and Brand Identity Developed by{" "}
            <span className="text-sky-300 selection:bg-white selection:text-sky-600">
              Limantara Foundation
            </span>
            .
          </p>
          <p className="font-body text-lg md:text-xl tracking-wide italic text-center opacity-75">
            In support of{" "}
            <a
              href="https://www.breakfreefromplastic.org/"
              className="underline hover:text-sky-300 transition"
            >
              #BreakFreeFromPlastic
            </a>
            , a global movement of over 1,000 groups from across the world.
          </p>
        </div>
      </footer>
    </main>
  );
}
