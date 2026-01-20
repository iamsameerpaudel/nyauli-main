import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I set up Nyauli for my restaurant?",
    answer: "Most restaurants are up and running within 24 hours. Our onboarding team will guide you through the setup process, help import your menu, and train your staff on using the system effectively.",
  },
  {
    question: "Can I use Nyauli on multiple devices?",
    answer: "Yes! Nyauli works on any device with a web browser. You can use it on tablets in the kitchen, phones for delivery tracking, and computers for management. All devices sync in real-time.",
  },
  {
    question: "Does Nyauli integrate with my existing POS system?",
    answer: "We integrate with most popular POS systems including Square, Toast, and Clover. If you have a custom system, our API allows for custom integrations. Contact our team for specific compatibility questions.",
  },
  {
    question: "How do customers receive order updates?",
    answer: "Customers can receive updates via SMS, email, or through a tracking link. They'll see real-time progress from order confirmation through preparation and delivery. No app download required for customers.",
  },
  {
    question: "What happens if I exceed my order limit on the free plan?",
    answer: "We'll notify you when you're approaching your limit. You can upgrade anytime to continue processing orders, or wait until the next month when your limit resets. We never stop orders mid-service.",
  },
  {
    question: "Is my data secure with Nyauli?",
    answer: "Absolutely. We use bank-level encryption for all data transmission and storage. We're SOC 2 compliant and never share your business data with third parties. Your customer information is protected at all times.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your data remains accessible for 30 days after cancellation, giving you time to export anything you need.",
  },
  {
    question: "Do you offer training for my staff?",
    answer: "Yes! All plans include access to our video tutorials and documentation. Professional and Enterprise plans include live training sessions and ongoing support to ensure your team gets the most out of Nyauli.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently asked{" "}
            <span className="text-gradient-mint">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Nyauli
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
