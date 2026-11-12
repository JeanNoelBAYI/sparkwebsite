"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@src/components/ui/button";

export type PhonesHeroBannerProps = {
	badge: string;
	title: string;
	description: string;
	ctaLabel: string;
	ctaHref?: string;
	secondaryCtaLabel?: string;
	secondaryCtaHref?: string;
};

type PhoneSlot = "center" | "left" | "right";

export default function PhonesHeroBanner({
	badge,
	title,
	description,
	ctaLabel,
	ctaHref = "/contact",
	secondaryCtaLabel,
	secondaryCtaHref,
}: PhonesHeroBannerProps) {
	const [activePhone, setActivePhone] = useState<PhoneSlot>("center");

	// When scrolling down towards the next section, reset to the default center image in front
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setActivePhone("center");
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="container mx-auto px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28">
			<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
				{/* Left Column: Copy & CTA */}
				<div className="lg:col-span-5 space-y-5">
					<span className="eyebrow">{badge}</span>

					<h1 className="text-4xl font-extrabold font-display sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
						{title}
					</h1>

					<p className="text-base sm:text-lg text-muted-foreground pt-1 leading-relaxed">
						{description}
					</p>

					<div className="pt-3 flex flex-wrap items-center gap-4">
						<Link href={ctaHref}>
							<Button
								size="lg"
								className="bg-[#12D18E] text-[#0B1220] hover:bg-[#0fb87c] font-bold gap-2 shadow-lg shadow-[#12D18E]/20"
							>
								<span>{ctaLabel}</span>
								<ArrowRight className="size-4" />
							</Button>
						</Link>

						{secondaryCtaLabel && secondaryCtaHref ? (
							<Link href={secondaryCtaHref}>
								<Button size="lg" variant="outline" className="font-semibold">
									<span>{secondaryCtaLabel}</span>
								</Button>
							</Link>
						) : null}
					</div>
				</div>

				{/* Right Column: Mobile App Showcase */}
				<div className="lg:col-span-7 w-full flex items-center justify-center">
					{/* Desktop / Laptop Showcase: 3 Staggered Overlapping Phones with Interactive Hover Stacking */}
					<div
						className="hidden lg:flex relative items-center justify-center w-full max-w-[560px] h-[480px]"
						onMouseLeave={() => setActivePhone("center")}
					>
						{/* Soft Ambient Backdrop Glow */}
						<div className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-[#12D18E]/10 blur-3xl" />

						{/* Left Phone: mob-2 */}
						<div
							onMouseEnter={() => setActivePhone("left")}
							className={`absolute left-2 cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "left"
									? "z-40 w-[240px] -rotate-2 -translate-y-4 scale-110 opacity-100"
									: activePhone === "right"
										? "z-10 w-[210px] -rotate-8 translate-y-8 scale-90 opacity-70"
										: "z-10 w-[220px] -rotate-6 translate-y-6 scale-100 opacity-90 hover:opacity-100"
							}`}
						>
							<Image
								src="/images/mob-2.png"
								alt="Trekk Rider App - Booking & Keyless Unlock"
								width={1290}
								height={2796}
								className={`w-full h-auto object-contain transition-all duration-500 ${
									activePhone === "left"
										? "drop-shadow-[0_35px_60px_rgba(0,0,0,0.50)]"
										: "drop-shadow-[0_20px_35px_rgba(0,0,0,0.30)]"
								}`}
								priority
							/>
						</div>

						{/* Center Phone: mob-1 (Default in front upon landing) */}
						<div
							onMouseEnter={() => setActivePhone("center")}
							className={`relative cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "center"
									? "z-30 w-[250px] rotate-0 translate-y-0 scale-100 opacity-100"
									: activePhone === "left"
										? "z-20 w-[240px] rotate-2 translate-y-4 scale-95 opacity-80"
										: "z-20 w-[240px] -rotate-2 translate-y-4 scale-95 opacity-80"
							}`}
						>
							<Image
								src="/images/mob-1.png"
								alt="Trekk Rider App - Primary Interface & Live Fleet Map"
								width={1290}
								height={2796}
								className={`w-full h-auto object-contain transition-all duration-500 ${
									activePhone === "center"
										? "drop-shadow-[0_30px_60px_rgba(0,0,0,0.40)]"
										: "drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
								}`}
								priority
							/>
						</div>

						{/* Right Phone: mob-3 */}
						<div
							onMouseEnter={() => setActivePhone("right")}
							className={`absolute right-2 cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "right"
									? "z-40 w-[230px] rotate-2 -translate-y-4 scale-110 opacity-100"
									: activePhone === "left"
										? "z-10 w-[200px] rotate-8 translate-y-10 scale-90 opacity-70"
										: "z-20 w-[210px] rotate-6 translate-y-8 scale-100 opacity-90 hover:opacity-100"
							}`}
						>
							<Image
								src="/images/mob-3.png"
								alt="Trekk Rider App - Wallet, Passes & Trip History"
								width={978}
								height={2000}
								className={`w-full h-auto object-contain transition-all duration-500 ${
									activePhone === "right"
										? "drop-shadow-[0_35px_60px_rgba(0,0,0,0.50)]"
										: "drop-shadow-[0_20px_35px_rgba(0,0,0,0.30)]"
								}`}
								priority
							/>
						</div>
					</div>

					{/* Mobile / Smaller Screens: ONLY mob-1.png */}
					<div className="flex lg:hidden relative items-center justify-center w-full py-6">
						<div className="relative w-[240px] sm:w-[280px]">
							<div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[#12D18E]/15 blur-2xl" />
							<Image
								src="/images/mob-1.png"
								alt="Trekk Rider App"
								width={1290}
								height={2796}
								className="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
