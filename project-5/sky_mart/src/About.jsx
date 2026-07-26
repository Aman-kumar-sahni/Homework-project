import {
  ArrowRight,
  BadgeCheck,
  Heart,
  Package,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
const About = () => {
  return (
    <main className="min-h-screen bg-[#0d0d0d] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl mt-20">

        {/* =====================================================
            ABOUT HERO SECTION
        ====================================================== */}

        <section className="flex flex-col items-center text-center">

          {/* Logo Icon */}
         <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaff00] text-black shadow-[0_0_35px_rgba(234,255,0,0.35)]">
  <Zap
    size={24}
    strokeWidth={3}
    className="fill-black text-black"
  />
</div>
          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About{" "}
            <span className="text-[#eaff00]">
              SkyMart
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>

        </section>


        {/* =====================================================
            STATS SECTION
        ====================================================== */}

        <section className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {/* Products */}
          <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/80 px-4 py-5 text-center">

            <Package
              size={20}
              className="mb-3 text-[#eaff00]"
            />

            <h3 className="text-xl font-bold">
              20K+
            </h3>

            <p className="mt-1 text-xs text-white/70">
              Products
            </p>

          </div>


          {/* Customers */}
          <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/80 px-4 py-5 text-center">

            <Users
              size={20}
              className="mb-3 text-[#eaff00]"
            />

            <h3 className="text-xl font-bold">
              50K+
            </h3>

            <p className="mt-1 text-xs text-white/70">
              Happy Customers
            </p>

          </div>


          {/* Rating */}
          <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/80 px-4 py-5 text-center">

            <Star
              size={20}
              className="mb-3 text-[#eaff00]"
            />

            <h3 className="text-xl font-bold">
              4.9
            </h3>

            <p className="mt-1 text-xs text-white/70">
              Avg. Rating
            </p>

          </div>


          {/* Delivery */}
          <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-white/80 px-4 py-5 text-center">

            <Truck
              size={20}
              className="mb-3 text-[#eaff00]"
            />

            <h3 className="text-xl font-bold">
              99%
            </h3>

            <p className="mt-1 text-xs text-white/70">
              On-time Delivery
            </p>

          </div>

        </section>


        {/* =====================================================
            OUR STORY SECTION
        ====================================================== */}

        <section className="mt-12 rounded-3xl border border-white/80 p-6 sm:p-8">

          <h2 className="text-xl font-bold sm:text-2xl">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-6 text-white/80">

            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually enjoyable?
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all at prices that don't require a second
              mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>

          </div>

        </section>


        {/* =====================================================
            WHAT WE STAND FOR
        ====================================================== */}

        <section className="mt-12">

          <h2 className="mb-7 text-center text-xl font-bold sm:text-2xl">
            What We Stand For
          </h2>


          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

            {/* Trust */}
            <div className="flex gap-4 rounded-2xl border border-white/80 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaff00]/20 text-[#eaff00]">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Trust
                </h3>

                <p className="mt-2 text-sm leading-5 text-white/70">
                  Every product is verified for quality and authenticity
                  before listing.
                </p>
              </div>

            </div>


            {/* Speed */}
            <div className="flex gap-4 rounded-2xl border border-white/80 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaff00]/20 text-[#eaff00]">
                <Truck size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Speed
                </h3>

                <p className="mt-2 text-sm leading-5 text-white/70">
                  We obsess over delivery times so your orders arrive when
                  promised.
                </p>
              </div>

            </div>


            {/* Community */}
            <div className="flex gap-4 rounded-2xl border border-white/80 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaff00]/20 text-[#eaff00]">
                <Heart size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Community
                </h3>

                <p className="mt-2 text-sm leading-5 text-white/70">
                  Built around real customer feedback, not just business
                  metrics.
                </p>
              </div>

            </div>


            {/* Quality */}
            <div className="flex gap-4 rounded-2xl border border-white/80 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaff00]/20 text-[#eaff00]">
                <BadgeCheck size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Quality
                </h3>

                <p className="mt-2 text-sm leading-5 text-white/70">
                  We curate the best — no filler, no junk, just great products.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MEET THE TEAM
        ====================================================== */}

        <section className="mt-12">

          <h2 className="mb-7 text-center text-xl font-bold sm:text-2xl">
            Meet the Team
          </h2>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* Aryan */}
            <div className="flex flex-col items-center rounded-2xl border border-white/80 px-4 py-5 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaff00] text-black shadow-[0_0_25px_rgba(234,255,0,0.3)]">
                A
              </div>

              <h3 className="text-sm font-bold">
                Aryan Shah
              </h3>

              <p className="mt-1 text-xs text-white/70">
                Founder & CEO
              </p>

            </div>


            {/* Priya */}
            <div className="flex flex-col items-center rounded-2xl border border-white/80 px-4 py-5 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-300 text-black shadow-[0_0_25px_rgba(147,197,253,0.3)]">
                P
              </div>

              <h3 className="text-sm font-bold">
                Priya Mehta
              </h3>

              <p className="mt-1 text-xs text-white/70">
                Head of Product
              </p>

            </div>


            {/* Rohan */}
            <div className="flex flex-col items-center rounded-2xl border border-white/80 px-4 py-5 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-300 text-black shadow-[0_0_25px_rgba(216,180,254,0.3)]">
                R
              </div>

              <h3 className="text-sm font-bold">
                Rohan Verma
              </h3>

              <p className="mt-1 text-xs text-white/70">
                Lead Engineer
              </p>

            </div>


            {/* Sneha */}
            <div className="flex flex-col items-center rounded-2xl border border-white/80 px-4 py-5 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-300 text-black shadow-[0_0_25px_rgba(252,165,165,0.3)]">
                S
              </div>

              <h3 className="text-sm font-bold">
                Sneha Kapoor
              </h3>

              <p className="mt-1 text-xs text-white/70">
                Design Director
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            READY TO SHOP CTA
        ====================================================== */}

        <section className="mt-12 rounded-3xl border border-[#eaff00]/50 px-6 py-10 text-center shadow-[0_0_40px_rgba(234,255,0,0.08)] sm:px-10">

          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to shop?
          </h2>

          <p className="mt-3 text-sm text-white/75">
            Explore thousands of products at unbeatable prices.
          </p>

          <button  className="mt-6 inline-flex items-center gap-2 rounded-xl cursor-pointer bg-[#eaff00] px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
            Browse Products
            <ArrowRight size={16} />
          </button>

        </section>

      </div>


      {/* =====================================================
          FOOTER
      ====================================================== */}

    

    </main>
  );
};

export default About;