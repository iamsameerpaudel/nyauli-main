import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger
} from "@/components/ui/sheet";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	return (
		<motion.nav
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 max-w-full right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
		>
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<button
						type="button"
						onClick={() => scrollToSection("hero")}
						className="flex items-center gap-2"
					>
						<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
							<span className="text-primary-foreground font-bold text-lg">
								N
							</span>
						</div>
						<span className="text-xl font-bold text-foreground">Nyauli</span>
					</button>

					{/* Navigation Links - Desktop */}
					<div className="hidden md:flex items-center gap-8">
						<button
							type={"button"}
							onClick={() => scrollToSection("features")}
							className="text-muted-foreground hover:text-primary transition-colors font-medium"
						>
							Features
						</button>
						<button
							type={"button"}
							onClick={() => scrollToSection("benefits")}
							className="text-muted-foreground hover:text-primary transition-colors font-medium"
						>
							Benefits
						</button>
						<button
							type={"button"}
							onClick={() => scrollToSection("pricing")}
							className="text-muted-foreground hover:text-primary transition-colors font-medium"
						>
							Pricing
						</button>
						<button
							type={"button"}
							onClick={() => scrollToSection("faq")}
							className="text-muted-foreground hover:text-primary transition-colors font-medium"
						>
							FAQ
						</button>
					</div>

					{/* CTA Buttons */}
					<div className="flex items-center gap-3">
						{/* WhatsApp button - always visible */}
						<a
							href="https://wa.me/255000000000"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-10 w-10 sm:w-auto sm:px-4 items-center justify-center rounded-lg border border-border bg-card text-foreground font-medium hover:bg-secondary transition-all duration-300 gap-2"
						>
							<MessageCircle className="w-4 h-4 text-primary" />
							<span className="hidden sm:inline">WhatsApp</span>
						</a>

						{/* Start Free - Desktop */}
						<button
							type={"button"}
							onClick={() => scrollToSection("pricing")}
							className="hidden sm:inline-flex h-10 px-5 items-center justify-center rounded-lg border-2 border-primary bg-transparent text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
						>
							Start Free
						</button>

						{/* Mobile Menu */}
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<button
									type={"button"}
									className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg border border-border bg-card hover:bg-secondary transition-colors"
								>
									<Menu className="w-5 h-5 text-foreground" />
								</button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[280px] sm:w-[320px]">
								<div className="flex flex-col gap-6 mt-8">
									<button
										type={"button"}
										onClick={() => scrollToSection("features")}
										className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
									>
										Features
									</button>
									<button
										type={"button"}
										onClick={() => scrollToSection("benefits")}
										className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
									>
										Benefits
									</button>
									<button
										type={"button"}
										onClick={() => scrollToSection("pricing")}
										className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
									>
										Pricing
									</button>
									<button
										type={"button"}
										onClick={() => scrollToSection("faq")}
										className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
									>
										FAQ
									</button>
									<div className="border-t border-border pt-6 mt-2">
										<button
											type={"button"}
											onClick={() => scrollToSection("pricing")}
											className="w-full h-12 flex items-center justify-center rounded-lg border-2 border-primary bg-transparent text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
										>
											Start Free
										</button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
