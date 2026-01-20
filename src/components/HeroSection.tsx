import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCollage from "@/assets/hero-collage.png";

const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative max-h-screen pt-16 sm:pt-20 overflow-hidden gradient-hero"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
				{/* Mobile view - vertical layout */}
				<div className="lg:hidden flex flex-col items-center justify-around min-h-[calc(100vh-25rem)] py-10 space-y-8">
					{/* Top text */}
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="max-w-3xl"
					>
						<h1 className="text-4xl font-bold text-foreground leading-8">
							Track orders across <br />
							<span className="text-gradient-mint text-2xl">
								Kitchen, Pickup, and Delivery.
							</span>
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-sm sm:text-base lg:text-lg text-muted-foreground"
					>
						No more missed orders, confusion, or delays.
					</motion.p>

					{/* Centered Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative max-w-2xl w-full"
					>
						<div className="relative rounded-2xl overflow-hidden shadow-elevated">
							<img
								src={heroCollage}
								alt="Restaurant order management - staff taking orders, kitchen preparing food, service, and delivery"
								className="w-full h-auto object-cover"
							/>

							{/* Overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
						</div>

						{/* Floating badge */}
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
							className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 bg-card border border-border rounded-lg sm:rounded-xl p-1.5 sm:p-4 shadow-lg"
						>
							<div className="flex items-center gap-2 sm:gap-3">
								<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-xl sm:text-2xl">✓</span>
								</div>
								<div>
									<p className="font-semibold text-foreground text-sm sm:text-base">
										100+ Orders
									</p>
									<p className="text-xs text-muted-foreground">
										Processed today
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Bottom content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="text-center max-w-md "
					>
						<Button
							size="xl"
							className="group w-full translate-y-7 sm:w-auto"
							asChild
						>
							<Link to="/pricing">
								Start Today for Free
								<ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
					</motion.div>
				</div>

				{/* Desktop view - original grid layout */}
				<div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)] py-12">
					{/* Content - Left side */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-left"
					>
						<h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-snug mb-4">
							Track orders across{" "}
							<span className="text-gradient-mint">
								Kitchen, Pickup, and Delivery.
							</span>
						</h1>
						<p className="text-lg text-muted-foreground mb-8 max-w-md">
							No more missed orders, confusion, or delays.
						</p>

						<Button size="xl" className="group" asChild>
							<Link to="/pricing">
								Start Today for Free
								<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</Button>
					</motion.div>

					{/* Image - Right side */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative"
					>
						<div className="relative rounded-2xl overflow-hidden shadow-elevated">
							<img
								src={heroCollage}
								alt="Restaurant order management - staff taking orders, kitchen preparing food, service, and delivery"
								className="w-full h-auto object-cover"
							/>
							{/* Overlay gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
						</div>

						{/* Floating badge */}
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
							className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg"
						>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
									<span className="text-2xl">✓</span>
								</div>
								<div>
									<p className="font-semibold text-foreground text-base">
										100+ Orders
									</p>
									<p className="text-xs text-muted-foreground">
										Processed today
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
