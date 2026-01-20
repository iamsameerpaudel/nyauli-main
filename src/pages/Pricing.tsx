import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    cta: "Start Free",
    ctaVariant: "mint-outline" as const,
    popular: false,
    features: [
      "Up to 50 orders/month",
      "Basic order management",
      "Real-time order tracking",
      "Customer notifications",
      "Email support",
      "1 user account",
      "Basic reporting",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For growing restaurants",
    cta: "Get Professional",
    ctaVariant: "hero" as const,
    popular: true,
    features: [
      "Unlimited orders",
      "Advanced analytics dashboard",
      "Multi-location support",
      "Custom branding",
      "Priority support",
      "Delivery management",
      "Inventory alerts",
      "10 user accounts",
      "API access",
      "Customer loyalty features",
    ],
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/month",
    description: "For restaurant chains",
    cta: "Contact Sales",
    ctaVariant: "mint-outline" as const,
    popular: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced API access",
      "White-label solution",
      "Advanced security",
      "SLA guarantee",
      "Unlimited user accounts",
      "Custom training",
      "24/7 phone support",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Choose your <span className="text-gradient-mint">plan</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no long-term commitments.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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

                <Button
                  variant={tier.ctaVariant}
                  size="lg"
                  className="w-full mb-8"
                >
                  {tier.cta}
                </Button>

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
              </motion.div>
            ))}
          </div>

          {/* FAQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              Have questions? Check out our FAQ or contact us.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/#faq">
                <Button variant="mint-outline" size="lg">
                  View FAQ
                </Button>
              </Link>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                <Button variant="mint-ghost" size="lg">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
