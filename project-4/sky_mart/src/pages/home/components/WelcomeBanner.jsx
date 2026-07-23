import { useNavigate } from "react-router";

const WelcomeSection = () => {
  const navigate=useNavigate()
  return (
    <section className="rounded-3xl border border-white/70 p-6 sm:p-8 lg:p-12">

      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

        {/* LEFT CONTENT */}

        <div className="max-w-2xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#dfff00]">
            Good Afternoon 👋
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Welcome back,
            <span className="block text-[#dfff00]">
              User!
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Discover today's picks — hand-curated products across
            electronics, fashion, and more.
          </p>


          {/* BUTTONS */}

          <div className="mt-7 flex flex-wrap gap-4">

            <button onClick={()=>{
              navigate("/shop")
            }}className="rounded-xl bg-[#dfff00] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
              Shop Now →
            </button>

            <button onClick={()=>{
              navigate("/shop")
            }} className="rounded-xl border border-white/50 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black">
              View All Products
            </button>

          </div>

        </div>


        {/* RIGHT HIGHLIGHTS */}

        <div className="flex w-full flex-row gap-4 sm:w-auto lg:flex-col">

          <div className="flex-1 rounded-2xl border border-[#dfff00]/40 bg-[#dfff00]/10 px-6 py-5 text-center lg:min-w-[140px]">

            <h2 className="text-3xl font-bold text-[#dfff00]">
              20+
            </h2>

            <p className="mt-1 text-xs text-white/70">
              Products Available
            </p>

          </div>


          <div className="flex-1 rounded-2xl border border-white/70 px-6 py-5 text-center lg:min-w-[140px]">

            <h2 className="text-3xl font-bold">
              Free
            </h2>

            <p className="mt-1 text-xs text-white/70">
              Delivery on ₹999+
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WelcomeSection;