"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo_perfectteam.png";
import Link from "next/link";
import Menu from "../../public/navbar/menu.svg";
import Close from "../../public/navbar/close.svg";
import Arrow from "../../public/navbar/arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [hovering, setHovering] = useState(false);
	const OpenMenu = () => {
		setOpen(!open);
	};

	if (typeof window !== "undefined") {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 1024) {
				setOpen(false);
			}
		});
	}

	const containterVariant = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.02,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: 0.02,
			},
		},
	};

	const divVariants = {
		initial: {
			opacity: 0,
			y: 50,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.2, 0.005, 0.0, 0.995],
			},
		},
		exit: {
			opacity: 0,
			y: -50,
			transition: {
				duration: 0.5,
				ease: [0.2, 0.005, 0.0, 0.995],
			},
		},
	};
	return (
		<div className="bg-background flex justify-center items flex-row fixed top-0 left-0 z-50 w-full">
			<div className="w-full max-w-[1300px] flex justify-between items-center flex-row h-[100px] px-5">
				<div className="relative h-16 w-16 z-50">
					<Image quality={100} src={Logo} fill alt="Logo" />
				</div>
				<ul className="hidden lg:flex list-none flex-row justify-center items-center gap-10">
					<li className="text-[20px]">
						<Link href="/#home">Home</Link>
					</li>
					<li
						onMouseEnter={() => setHovering(true)}
						onMouseLeave={() => setHovering(false)}
						className="text-[20px]"
					>
						<div className="flex flex-row items-center gap-2 relative">
							Info
							<div
								className={`relative w-4 h-4 duration-300 object-center ${
									hovering ? "rotate-180" : "rotate-0"
								}`}
							>
								<Image
									src={Arrow}
									className="object-contain"
									fill
									alt="Arrow"
								/>
							</div>
							<AnimatePresence mode="wait">
								{hovering && (
									<motion.div
										initial="initial"
										animate="animate"
										exit="exit"
										variants={containterVariant}
                                        key={"info"}
										className="absolute z-50 shadow-lg shadow-black right-0 top-7 bg-background rounded-xl p-5 flex justify-center items-center flex-col gap-5"
									>
										<motion.div
                                            key={"aanbod"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#aanbod">Aanbod</Link>
										</motion.div>
										<motion.div
                                            key={"rooster"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#rooster">Rooster</Link>
										</motion.div>
										<motion.div
                                            key={"lesgevers"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#lesgevers">
												Lesgevers
											</Link>
										</motion.div>
										<motion.div
                                            key={"reservatie"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#reservatie">
												Reservatie
											</Link>
										</motion.div>
										<motion.div
                                            key={"proefles"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#reservatie">
												Proefles
											</Link>
										</motion.div>
										<motion.div
                                            key={"tarieven"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#tarieven">
												Tarieven
											</Link>
										</motion.div>
										<motion.div
                                            key={"infrastructuur"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#infrastructuur">
												Infrastructuur
											</Link>
										</motion.div>
										<motion.div
                                            key={"locatie"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#locatie">Locatie</Link>
										</motion.div>
										<motion.div
                                            key={"teamofchampions"}
											variants={divVariants}
											className="text-[20px] text-center"
										>
											<Link href="/#teamofchampions">
												Team of Champions
											</Link>
										</motion.div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</li>
					<li className="text-[20px]">
						<Link href="/#contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile menu */}
				<div
					onClick={OpenMenu}
					className="relative w-12 h-12 cursor-pointer z-50 block lg:hidden"
				>
					<Image
						quality={100}
						src={open ? Close : Menu}
						fill
						alt="Menu"
					/>
				</div>
				<AnimatePresence mode="wait">
					{open && (
						<motion.div
							initial="initial"
							animate="animate"
							exit="exit"
							variants={containterVariant}
							className="fixed bg-background top-0 left-0 h-full w-full flex justify-center items-center flex-col gap-5"
						>
							<motion.div
                                key={"home"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#home"
								>
									Home
								</Link>
							</motion.div>
							<motion.div
                                key={"aanbod"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#aanbod"
								>
									Aanbod
								</Link>
							</motion.div>
							<motion.div
                                key={"rooster"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#rooster"
								>
									Rooster
								</Link>
							</motion.div>
							<motion.div
                                key={"lesgevers"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#lesgevers"
								>
									Lesgevers
								</Link>
							</motion.div>
							<motion.div
                                key={"reservatie"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#reservatie"
								>
									Reservatie
								</Link>
							</motion.div>
							<motion.div
                                key={"proefles"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#reservatie"
								>
									Proefles
								</Link>
							</motion.div>
							<motion.div
                                key={"tarieven"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#tarieven"
								>
									Tarieven
								</Link>
							</motion.div>
							<motion.div
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
                                    key={"infrastructuur"}
									onClick={() => setOpen(!open)}
									href="/#infrastructuur"
								>
									Infrastructuur
								</Link>
							</motion.div>
							<motion.div
                                key={"locatie"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#locatie"
								>
									Locatie
								</Link>
							</motion.div>
							<motion.div
                                key={"teamofchampions"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#teamofchampions"
								>
									Team of Champions
								</Link>
							</motion.div>
							<motion.div
                                key={"contact"}
								variants={divVariants}
								className="text-[20px]"
							>
								<Link
									onClick={() => setOpen(!open)}
									href="/#contact"
								>
									Contact
								</Link>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default NavBar;
