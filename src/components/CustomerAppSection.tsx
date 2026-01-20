import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Bell, Clock, MessageSquare, Download } from "lucide-react";

const features = [
  {
    icon: Globe,
    text: "Order directly from your website or mobile app",
  },
  {
    icon: Bell,
    text: "Automatic notifications at every stage of the order",
  },
  {
    icon: Clock,
    text: "Clear preparation and delivery countdowns",
  },
  {
    icon: MessageSquare,
    text: "Fewer follow-ups, less confusion, more trust",
  },
];

const CustomerAppSection = () => {
  return (
    <section className="py-12 px-4 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Header and subtext */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Go Beyond the{" "}
              <span className="text-gradient-mint">physical floor</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-0 lg:mb-8 max-w-lg">
              With the Nyauli customer app and web ordering, customers can place orders remotely and stay informed without calling or waiting.
            </p>

            {/* Feature list - hidden on mobile */}
            <div className="hidden lg:block space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA - hidden on mobile */}
            <div className="hidden lg:block">
              <Button variant="mint-outline" size="lg" className="group">
                <Download className="w-5 h-5" />
                Download the App
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup (Customer App) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full order-2"
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
                  
                  {/* Customer app content mockup */}
                  <div className="p-4 space-y-4">
                    <div className="py-2">
                      <h3 className="font-bold text-foreground">Your Order</h3>
                      <p className="text-xs text-muted-foreground">Order #1024</p>
                    </div>
                    
                    {/* Order progress */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground text-sm">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground">Order Confirmed</p>
                          <p className="text-xs text-muted-foreground">10:32 AM</p>
                        </div>
                      </div>
                      <div className="ml-4 border-l-2 border-primary h-6" />
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse">
                          <span className="text-primary-foreground text-sm">🍳</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground">Preparing</p>
                          <p className="text-xs text-muted-foreground">~15 min remaining</p>
                        </div>
                      </div>
                      <div className="ml-4 border-l-2 border-border h-6" />
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">📦</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">Ready for pickup</p>
                        </div>
                      </div>
                    </div>

                    {/* Items summary */}
                    <div className="bg-secondary/50 rounded-xl p-3 mt-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Items</p>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">1x Grilled Chicken</p>
                        <p className="text-xs text-muted-foreground">2x Fresh Juice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg min-w-[140px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🔔</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground whitespace-nowrap">Almost Ready!</p>
                    <p className="text-[10px] text-muted-foreground whitespace-nowrap">5 minutes left</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature list - shown on mobile after phone mockup */}
          <div className="order-3 lg:hidden space-y-4 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA - shown on mobile after features */}
          <div className="order-4 lg:hidden">
            <Button variant="mint-outline" size="lg" className="group w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Download the App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerAppSection;
