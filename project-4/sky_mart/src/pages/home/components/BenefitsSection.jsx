const benefits = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Same-day on select items",
  },
  {
    icon: "🛡️",
    title: "Secure Payments",
    description: "100% encrypted checkout",
  },
  {
    icon: "🏷️",
    title: "Best Prices",
    description: "Price-match guarantee",
  },
];

const BenefitsSection = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">

      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex items-center gap-4 rounded-2xl border border-white/70 p-5"
        >

          <div className="text-2xl text-[#dfff00]">
            {benefit.icon}
          </div>

          <div>

            <h3 className="font-semibold">
              {benefit.title}
            </h3>

            <p className="text-sm text-white/50">
              {benefit.description}
            </p>

          </div>

        </div>
      ))}

    </section>
  );
};

export default BenefitsSection;