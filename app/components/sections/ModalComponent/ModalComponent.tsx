"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModalComponent = ({
	slideIndex,
	onClick,
	images,
	size,
}: {
	slideIndex: number;
	onClick: () => void;
	images: StaticImageData[];
	size?: string;
}) => {
	const minMax = {
		min: 0,
		max: images.length - 1,
	};

	const [slide, setSlide] = useState(slideIndex);

	const Decrease = () => {
		if (slide >= minMax.min + 1 && slide <= minMax.max) {
			setSlide(slide - 1);
		} else {
			setSlide(minMax.max);
		}
	};
	const Increase = () => {
		if (slide >= minMax.min && slide <= minMax.max - 1) {
			setSlide(slide + 1);
		} else {
			setSlide(minMax.min);
		}
	};

	const imageVariant = {
		initial: {
			opacity: 0,
			x: 50,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: [0.2, 0.005, 0.0, 0.995],
			},
		},
		exit: {
			opacity: 0,
			x: -50,
			transition: {
				duration: 0.5,
				ease: [0.2, 0.005, 0.0, 0.995],
			},
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center"
		>
			<button
				onClick={onClick}
				className="absolute top-10 right-10 z-50 rounded-full bg-[#202020] bg-opacity-50 w-14 h-14 grid place-content-center"
			>
				<svg
					width="30"
					height="30"
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_14_692"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="50"
						height="50"
					>
						<rect width="50" height="50" fill="#ffffff" />
					</mask>
					<g mask="url(#mask0_14_692)">
						<path
							d="M13.3334 39.5833L10.4167 36.6667L22.0834 25L10.4167 13.3333L13.3334 10.4167L25 22.0833L36.6667 10.4167L39.5834 13.3333L27.9167 25L39.5834 36.6667L36.6667 39.5833L25 27.9167L13.3334 39.5833Z"
							fill="#ffffff"
						/>
					</g>
				</svg>
			</button>
			<button
				className="absolute top-1/2 -translate-y-1/2 z-50 left-5 md:left-10 rounded-full bg-[#202020] bg-opacity-50 w-14 h-14 grid place-content-center"
				onClick={() => Decrease()}
			>
				<svg
					className="rotate-90 scale-125"
					width="20"
					height="20"
					viewBox="0 0 16 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 2L8 8L14 2"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="square"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<AnimatePresence mode="popLayout">
				<motion.div
					key={slide}
					variants={imageVariant}
					initial="initial"
					animate="animate"
					exit="exit"
					className={`w-full  ${
						size === "small"
							? "max-w-[600px] h-[500px]"
							: "max-w-[1300px] aspect-video h-min"
					}  overflow-hidden relative bg-black`}
				>
					<Image
						src={images[slide]}
						fill
						quality={100}
						className="object-cover"
						alt="infrastructuur"
					/>
				</motion.div>
			</AnimatePresence>
			<button
				className="absolute top-1/2 -translate-y-1/2 z-50 right-5 md:right-10 rounded-full bg-[#202020] bg-opacity-50 w-14 h-14 grid place-content-center"
				onClick={() => Increase()}
			>
				<svg
					className="-rotate-90 scale-125"
					width="20"
					height="20"
					viewBox="0 0 16 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 2L8 8L14 2"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="square"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<div
				onClick={onClick}
				className="-z-10 fixed left-0 top-0 w-full h-full "
			></div>
		</motion.div>
	);
};

export default ModalComponent;
