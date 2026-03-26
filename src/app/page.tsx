import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 items-center gap-16">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Hi, I'm Gurudev
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              I build clean, scalable web applications and enjoy solving
              real-world problems through structured thinking.
            </p>
          </div>

          {/* IMAGE */}
        <div className="flex justify-end">
  <Image
    src="/image/gurudev.png-removebg-preview.png"
    alt="Gurudev"
    width={340}
    height={340}
    className="rounded-xl"
    priority
  />
</div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="min-h-screen flex items-center px-6 border-t border-white/10">
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            About
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I’m a Computer Science undergraduate focused on building
            responsive applications and backend systems. I enjoy turning
            complex problems into simple, usable solutions.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
<section className="min-h-screen px-6 border-t border-white/10 flex items-center">
  <div className="max-w-6xl w-full mx-auto">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold">
      Projects
    </h2>

    {/* Grid */}
    <div className="mt-10 grid md:grid-cols-2 gap-6">

      {/* Card 1 */}
      <div className="border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold">
          Portfolio Website
        </h3>
        <p className="mt-4 text-gray-400">
          A modern developer portfolio built with Next.js and Tailwind CSS.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border border-white/10 rounded-xl p-6">
        <h3 className="text-xl font-semibold">
          Backend API System
        </h3>
        <p className="mt-4 text-gray-400">
          Scalable REST API with authentication and structured architecture.
        </p>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}