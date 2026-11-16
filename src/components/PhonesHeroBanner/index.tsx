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
	images?: {
		left: string;
		center: string;
		right: string;
	};
};

const DEFAULT_IMAGES = {
	left: "/images/assets/corporate fleet 4.jpg",
	center: "/images/assets/app2.jpg",
	right: "/images/assets/corporate fleet2.jpg",
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
	images = DEFAULT_IMAGES,
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

				{/* Right Column: Overlapping Responsive Showcase */}
				<div className="lg:col-span-7 w-full flex items-center justify-center">
					{/* Desktop / Laptop Showcase: 3 Staggered Overlapping Cards with Interactive Hover Stacking */}
					<div
						className="hidden lg:flex relative items-center justify-center w-full max-w-[780px] min-h-[460px]"
						onMouseLeave={() => setActivePhone("center")}
					>
						{/* Soft Ambient Backdrop Glow */}
						<div className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-[#12D18E]/10 blur-3xl" />

						{/* Left Card */}
						<div
							onMouseEnter={() => setActivePhone("left")}
							className={`absolute left-0 cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "left"
									? "z-40 -rotate-2 -translate-y-4 scale-105 opacity-100"
									: activePhone === "right"
										? "z-10 -rotate-6 translate-y-8 scale-90 opacity-70"
										: "z-10 -rotate-4 translate-y-6 scale-100 opacity-90 hover:opacity-100"
							}`}
						>
							<Image
								src={images.left}
								alt={`${badge} — left showcase`}
								width={1200}
								height={900}
								className={`w-auto h-auto max-w-[330px] max-h-[320px] object-contain rounded-2xl border border-white/15 transition-all duration-500 ${
									activePhone === "left"
										? "shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
										: "shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
								}`}
								priority
							/>
						</div>

						{/* Center Card (Default in front upon landing & largest) */}
						<div
							onMouseEnter={() => setActivePhone("center")}
							className={`relative cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "center"
									? "z-30 rotate-0 -translate-y-2 scale-100 opacity-100"
									: activePhone === "left"
										? "z-20 rotate-2 translate-y-4 scale-95 opacity-80"
										: "z-20 -rotate-2 translate-y-4 scale-95 opacity-80"
							}`}
						>
							<Image
								src={images.center}
								alt={`${badge} — primary showcase`}
								width={1200}
								height={900}
								className={`w-auto h-auto max-w-[520px] max-h-[420px] object-contain rounded-2xl border border-white/15 transition-all duration-500 ${
									activePhone === "center"
										? "shadow-[0_30px_60px_rgba(0,0,0,0.40)]"
										: "shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
								}`}
								priority
							/>
						</div>

						{/* Right Card */}
						<div
							onMouseEnter={() => setActivePhone("right")}
							className={`absolute right-0 cursor-pointer transition-all duration-500 ease-out ${
								activePhone === "right"
									? "z-40 rotate-2 -translate-y-4 scale-105 opacity-100"
									: activePhone === "left"
										? "z-10 rotate-6 translate-y-10 scale-90 opacity-70"
										: "z-20 rotate-4 translate-y-8 scale-100 opacity-90 hover:opacity-100"
							}`}
						>
							<Image
								src={images.right}
								alt={`${badge} — right showcase`}
								width={1200}
								height={900}
								className={`w-auto h-auto max-w-[330px] max-h-[320px] object-contain rounded-2xl border border-white/15 transition-all duration-500 ${
									activePhone === "right"
										? "shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
										: "shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
								}`}
								priority
							/>
						</div>
					</div>

					{/* Mobile / Smaller Screens: ONLY center image */}
					<div className="flex lg:hidden relative items-center justify-center w-full py-4">
						<div className="relative w-full max-w-[480px]">
							<div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-[#12D18E]/15 blur-2xl" />
							<Image
								src={images.center}
								alt={`${badge} — showcase`}
								width={1200}
								height={900}
								className="relative z-10 w-full h-auto rounded-2xl border border-white/15 shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
