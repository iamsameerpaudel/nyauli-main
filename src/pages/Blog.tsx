import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Why Real-Time Order Tracking Increases Customer Retention by 40%",
    excerpt: "Discover how transparent order updates build trust and keep customers coming back to your restaurant.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Customer Experience",
  },
  {
    id: 2,
    title: "The Hidden Cost of Order Confusion: A Restaurant Owner's Guide",
    excerpt: "Learn how unclear order processes impact your bottom line and what you can do about it.",
    author: "Michael Torres",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Operations",
  },
  {
    id: 3,
    title: "5 Ways Mobile Order Management Changed Our Restaurant Forever",
    excerpt: "A case study from The Bistro on implementing mobile-first order tracking.",
    author: "James Mitchell",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Case Study",
  },
  {
    id: 4,
    title: "Peak Hour Chaos to Peak Hour Profits: A Transformation Story",
    excerpt: "How one café turned their busiest hours from a nightmare into their most profitable time.",
    author: "Lisa Rodriguez",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Success Story",
  },
  {
    id: 5,
    title: "The Psychology of Waiting: Why Updates Matter More Than Speed",
    excerpt: "Research shows customers are happier waiting longer when they're kept informed. Here's why.",
    author: "Dr. Emily Park",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    category: "Research",
  },
  {
    id: 6,
    title: "From 2-Star to 5-Star Reviews: The Order Experience Connection",
    excerpt: "How improving your order communication can dramatically boost your online ratings.",
    author: "David Kim",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    category: "Reviews",
  },
];

const Blog = () => {
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
              The Nyauli <span className="text-gradient-mint">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, stories, and best practices for restaurant order management
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 mb-12 shadow-soft"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Article
                </span>
                <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
                  Why Customers Value Being Informed About Their Orders
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  In-depth research and real-world examples showing how transparent order tracking transforms customer satisfaction, reduces complaints, and builds lasting loyalty.
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nyauli Research Team
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 min read
                  </span>
                </div>
                <Button variant="hero" size="lg" className="group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="bg-secondary/50 rounded-xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">📊</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Customer Experience Research</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="bg-secondary/30 h-40 flex items-center justify-center">
                  <span className="text-4xl">{
                    post.category === "Customer Experience" ? "😊" :
                    post.category === "Operations" ? "⚙️" :
                    post.category === "Case Study" ? "📱" :
                    post.category === "Success Story" ? "🚀" :
                    post.category === "Research" ? "🧠" : "⭐"
                  }</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Ready to transform your restaurant's order experience?
            </p>
            <Link to="/pricing">
              <Button variant="hero" size="lg" className="group">
                Start Free Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
