export default function App() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center">

        <h1 className="text-7xl font-bold">
          Ren Jie
        </h1>

        <p className="text-2xl mt-4 text-zinc-400">
          Embedded Systems • Robotics • AI
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            Projects
          </button>

          <button className="bg-zinc-800 px-6 py-3 rounded-xl">
            Resume
          </button>

        </div>

      </section>

      <section className="max-w-6xl mx-auto py-24 px-8">

        <h2 className="text-5xl mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Project
            title="ESP32 Data Logger"
            text="WiFi CSV streaming from HX711 load cell."
          />

          <Project
            title="ILI9341 UI"
            text="Modern touchscreen interface using PlatformIO."
          />

          <Project
            title="2.4GHz Antenna"
            text="Novel antenna for indoor localization."
          />

        </div>

      </section>
    </>
  )
}

function Project({ title, text }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-8 hover:scale-105 duration-300">

      <div className="aspect-video bg-zinc-800 rounded-xl mb-6"></div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-zinc-400 mt-3">
        {text}
      </p>

    </div>
  )
}