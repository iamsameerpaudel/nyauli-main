import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",

    description: "Perfect for small cafés getting started",
    cta: "Start Free",
    ctaVariant: "mint-outline" as const,
    popular: false,
    features: [
      "Up to 100 orders/month",
      "Single location",
      "Real-time order tracking",
      "Basic customer notifications",
      "Menu management",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "For busy restaurants ready to scale",
    cta: "Get Growth",
    ctaVariant: "hero" as const,
    popular: true,
    features: [
      "Unlimited orders",
      "Up to 3 locations",
      "Advanced order management",
      "Customer app integration",
      "Delivery & takeaway management",
      "Analytics dashboard",
      "Priority support",
      "Custom branding",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For restaurant chains & franchises",
    cta: "Contact Sales",
    ctaVariant: "mint-outline" as const,
    popular: false,
    features: [
      "Everything in Growth",
      "Unlimited locations",
      "API access & integrations",
      "Advanced analytics & reports",
      "Dedicated account manager",
      "Staff management tools",
      "White-label customer app",
      "SLA guarantee",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, transparent{" "}
            <span className="text-gradient-mint">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your restaurant. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card border rounded-2xl p-8 ${
                tier.popular
                  ? 'border-primary shadow-glow scale-105'
                  : 'border-border shadow-soft'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && (
                  <span className="text-muted-foreground">{tier.period}</span>
                )}
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
                            <Button
                variant={tier.ctaVariant}
                size="lg"
                className="w-full mt-8"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
