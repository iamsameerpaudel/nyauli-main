import { motion } from "framer-motion";
import { Bell, Globe, Smile, TrendingUp, Star } from "lucide-react";

const benefits = [
  {
    icon: Bell,
    title: "Live Notifications",
    description: "Know exactly what's being prepared, what's ready, and what's out for delivery in real time.",
  },
  {
    icon: Globe,
    title: "Sell Beyond Floors",
    description: "Manage takeaways and deliveries with your own website and mobile app.",
  },
  {
    icon: Smile,
    title: "Happier Customers",
    description: "Keep your customers informed and stress-free at every stage of their order.",
  },
  {
    icon: TrendingUp,
    title: "Manage Peak Hours",
    description: "Handle busy times efficiently, so orders flow smoothly and staff stay on top of demand.",
  },
];

const testimonials = [
  {
    quote: "Finally, no more confusion in the kitchen. Every order is crystal clear!",
    author: "James M.",
    role: "Head Chef, The Bistro",
  },
  {
    quote: "Our delivery orders doubled after we started using Nyauli's system.",
    author: "Sarah K.",
    role: "Owner, Café Sunrise",
  },
  {
    quote: "Customer complaints dropped by 80%. They love knowing their order status!",
    author: "Michael T.",
    role: "Manager, Urban Eats",
  },
  {
    quote: "Friday nights used to be chaos. Now it's our best performing day.",
    author: "Lisa R.",
    role: "Operations, The Grill House",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Why Restaurants <span className="text-gradient-mint">Love Nyauli</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sliding Testimonials */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-card border border-border rounded-xl p-5"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-3">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
