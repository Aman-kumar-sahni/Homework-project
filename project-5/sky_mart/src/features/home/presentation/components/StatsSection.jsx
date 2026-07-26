// src/components/StatsSection.jsx

import {
  Package,
  TrendingUp,
  Star,
  Tag,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Cart Items",
    value: "0",
    subtitle: "In your bag",
    icon: Package,
    iconBg: "bg-lime-300/10",
    iconColor: "text-lime-300",
  },
  {
    id: 2,
    title: "Cart Value",
    value: "$0.00",
    subtitle: "Ready to checkout",
    icon: TrendingUp,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    id: 3,
    title: "Top Products",
    value: "5",
    subtitle: "Highly rated",
    icon: Star,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    id: 4,
    title: "Categories",
    value: "6",
    subtitle: "To explore",
    icon: Tag,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-white/15 bg-[#151515] p-5 hover:border-lime-300/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  {item.value}
                </h2>

                <p className="text-sm font-medium text-gray-200">
                  {item.title}
                </p>

                <span className="text-xs text-gray-500">
                  {item.subtitle}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsSection;