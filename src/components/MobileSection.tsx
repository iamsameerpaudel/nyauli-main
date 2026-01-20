import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Clock, Users, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "Real-time order tracking",
    description: "From placement to delivery",
  },
  {
    icon: Smartphone,
    title: "Pre-orders & peak-hour management",
    description: "Handle busy times efficiently",
  },
  {
    icon: Users,
    title: "Live updates for customers",
    description: "Keep them informed always",
  },
  {
    icon: BarChart3,
    title: "Insights and analytics",
    description: "At a glance dashboards",
  },
];

const MobileSection = () => {
  return (
    <section id="features" className="py-12 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Phone Mockup - shown between subtext and features on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Status bar mockup */}
                  <div className="bg-secondary px-6 py-3 flex justify-between items-center">
                    <span className="text-xs font-medium text-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 bg-foreground/60 rounded-sm" />
                      <div className="w-4 h-3 bg-foreground/60 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App content mockup */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground">Orders</h3>
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">12 Active</span>
                    </div>
                    
                    {/* Order cards */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-secondary/50 rounded-xl p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-sm text-foreground">Order #{1000 + i}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            i === 1 ? 'bg-primary/20 text-primary' : 
                            i === 2 ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                          }`}>
                            {i === 1 ? 'Preparing' : i === 2 ? 'Ready' : 'New'}
                          </span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs text-muted-foreground">
                            {i === 1 ? '3 items • Dine-in' : i === 2 ? '2 items • Takeaway' : '5 items • Delivery'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg min-w-[140px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🔔</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground whitespace-nowrap">New Order!</p>
                    <p className="text-[10px] text-muted-foreground whitespace-nowrap">Table 5 • 2 items</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Header and subtext first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Manage Your Restaurant with{" "}
              <span className="text-gradient-mint">your Phone</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-0 lg:mb-8 max-w-lg">
              Our mobile-first approach puts your restaurant or café in your hands. Track orders, manage takeaways and deliveries, with the device that you and your staff already have.
            </p>

            {/* Feature list - hidden on mobile, shown on desktop */}
            <div className="hidden lg:grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA - hidden on mobile */}
            <div className="hidden lg:block">
              <Link to="/pricing">
                <Button variant="hero" size="lg" className="group">
                  Set up now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Feature list - shown on mobile after phone mockup */}
          <div className="order-3 lg:hidden w-full grid sm:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - shown on mobile after features */}
          <div className="order-4 lg:hidden">
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Set up now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
