import { Leaf, Recycle, Gem, Building2, ShieldCheck } from "lucide-react";

const LIGRA_BLUE = "#048099";

const features = [
  {
    icon: Leaf,
    title: "Lightweight",
    description: "Reduced material weight",
  },
  {
    icon: Recycle,
    title: "Recycled",
    description: "Circular material approach",
  },
  {
    icon: Gem,
    title: "Silica Free",
    description: "Crystalline silica free solutions",
  },
  {
    icon: Building2,
    title: "Versatile",
    description: "Multiple industrial applications",
  },
  {
    icon: ShieldCheck,
    title: "Durable",
    description: "Engineered for long-lasting performance",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 justify-items-center">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  style={{ borderColor: LIGRA_BLUE }}
                >
                  <Icon size={24} color={LIGRA_BLUE} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
