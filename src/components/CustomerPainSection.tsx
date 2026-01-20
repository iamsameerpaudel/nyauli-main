import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const painPoints = [
  {
    problem: '"I don\'t know what\'s happening with my order."',
    solution: "Live order status and clear progress updates.",
  },
  {
    problem: '"Why is my order taking so long?"',
    solution: "Real-time preparation and delivery countdowns.",
  },
  {
    problem: '"Did my order even go through?"',
    solution: "Immediate confirmation and visible order tracking.",
  },
  {
    problem: '"I have to keep calling the restaurant."',
    solution: "Automatic updates reduce the need to ask.",
  },
  {
    problem: '"Delivery timing feels unreliable."',
    solution: "Clear handoff between kitchen and delivery stages.",
  },
  {
    problem: '"I don\'t trust ordering here again."',
    solution: "Transparent order flow builds confidence and repeat visits.",
  },
];

const CustomerPainSection = () => {
  return (
    <section className="py-10 lg:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            How Nyauli keeps your{" "}
            <span className="text-gradient-mint">customers informed</span>
          </h2>
        </motion.div>

        {/* Compact Pain Point Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-4 shadow-soft hover:shadow-md transition-all duration-300"
            >
              <p className="text-foreground font-medium text-sm mb-1">
                {item.problem}
              </p>
              <div className="flex items-start gap-2 text-primary">
                <ArrowRight className="w-3 h-3 flex-shrink-0 mt-1" />
                <p className="text-xs text-muted-foreground">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/blog">
            <Button variant="mint" size="default" className="group">
              See why customers value getting informed
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerPainSection;
