"use client";

import Image from "next/image";
import React, { useState } from "react";
import TOC1 from "../../../public/TOC/TOC1.png";
import TOC2 from "../../../public/TOC/TOC2.png";
import TOC3 from "../../../public/TOC/TOC3.png";
import TOC4 from "../../../public/TOC/TOC4.png";
import TOC5 from "../../../public/TOC/TOC5.png";
import TOC6 from "../../../public/TOC/TOC6.png";
import TOC7 from "../../../public/TOC/TOC7.png";
import TOC8 from "../../../public/TOC/TOC8.png";
import { AnimatePresence } from "framer-motion";
import ModalComponent from "./ModalComponent/ModalComponent";
import Ben from "../../../public/TOC/ben.png";
import Ayton from "../../../public/TOC/ayton.png";
import Tarik from "../../../public/TOC/tarik.png";
import Anthony from "../../../public/TOC/anthony.png";

const TOCSection = () => {
	const [modalIndex, setModalIndex] = useState<number>(0);
	const [modalOpen, setModalOpen] = useState<boolean>();

	const openModal = (index: number) => {
		setModalIndex(index);
		setModalOpen(!modalOpen);
	};

	const images = [TOC1, TOC2, TOC3, TOC4, TOC5, TOC6, TOC7, TOC8];
	return (
		<section
			id="teamofchampions"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">
				Team Of Champions
			</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Perfect Team MMA training center kent een rijke geschiedenis op
				gebied van competitie. Als enige Belgische team namen wij deel
				aan wereldbekende evenementen zoals: UFC, Bellator, RIZIN, Cage
				Warriors, ... .
				<br />
				<br />
				Dankzij onze talrijke successen op nationale en internationale
				evenementen kregen wij de naam &quot;Team Of Champions&quot;.
			</p>
			<AnimatePresence mode="wait">
				{modalOpen && (
					<ModalComponent
                        key={modalIndex}
						images={images}
						size="small"
						onClick={() => setModalOpen(!modalOpen)}
						slideIndex={modalIndex}
					/>
				)}
			</AnimatePresence>
			<div className="grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 place-content-center w-full h-[300vh] md:h-[160vh] lg:h-[600px] gap-5 mt-[50px]">
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => openModal(index)}
						className="relative w-full h-full bg-white group"
					>
						<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100  duration-300 z-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="40px"
								width={40}
								viewBox="0 0 512 512"
							>
								<path
									fill="white"
									d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
								/>
							</svg>
						</div>
						<Image
							src={image}
							fill
							quality={100}
							className="object-cover"
							alt={`teamofchampions${index}`}
						/>
					</div>
				))}
			</div>
			<div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 place-content-center w-full h-full gap-5 mt-5">
				<div className="relative w-full h-[600px] flex flex-col justify-end items-start p-5 border border-[#3C3C3C]">
					<a aria-label="ben_sherdog_link" target="_blank" href="https://www.sherdog.com/fighter/Ben-Dandois-7473">
						<h1 className="font-semibold text-[28px] mt-3 flex flex-col leading-tight hover:underline hover:cursor-pointer">
							Ben Dandois
						</h1>
					</a>
					<h1 className="font-semibold text-[24px] text-green leading-tight">
						Mr. Perfect
					</h1>
					<p className="text-[20px] mt-3">
						- Europees kampioen MMA
						<br />
						- Belgisch kampioen MMA
						<br />
						- Belgisch kampioen worstelen
						<br />- FILA grappling kampioen
					</p>
					<p className="text-[20px] mt-3">Cage Warriors</p>
					<Image
						src={Ben}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
				<div className="relative w-full h-[600px] flex flex-col justify-end items-start p-5 border border-[#3C3C3C]">
					<a aria-label="ayton_sherdog_link" target="_blank" href="https://www.sherdog.com/fighter/Ayton-De-Paepe-140113">
						<h1 className="font-semibold text-[28px] mt-3 flex flex-col leading-tight hover:underline hover:cursor-pointer">
							Ayton De Paepe
						</h1>
					</a>
					<h1 className="font-semibold text-[24px] text-green leading-tight">
						Hitman
					</h1>
					<p className="text-[20px] mt-3">
						- Belgisch kampioen MMA
						<br />- SFC kampioen MMA
					</p>
					<p className="text-[20px] mt-3">
						Cage Warriors, HIT-FC, SFC
					</p>
					<Image
						src={Ayton}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
				<div className="relative w-full h-[600px] flex flex-col justify-end items-start p-5 border border-[#3C3C3C]">
					<a aria-label="tarik_sherdog_link" target="_blank" href="https://www.sherdog.com/fighter/Tarik-Jaaidi-277547">
						<h1 className="font-semibold text-[28px] mt-3 flex flex-col leading-tight hover:underline hover:cursor-pointer">
							Tarik Jaaidi
						</h1>
					</a>
					<h1 className="font-semibold text-[24px] text-green leading-tight">
						El Matador
					</h1>
					<p className="text-[20px] mt-3">- SFC kampioen MMA</p>
					<p className="text-[20px] mt-3">Cage Warriors, SFC</p>
					<Image
						src={Tarik}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
				<div className="relative w-full h-[600px] flex flex-col justify-end items-start p-5 border border-[#3C3C3C]">
					<a aria-label="anthony_sherdog_link" target="_blank" href="https://www.sherdog.com/fighter/Anthony-Lambrechts-269541">
						<h1 className="font-semibold text-[28px] mt-3 flex flex-col leading-tight hover:underline hover:cursor-pointer">
							Anthony
						</h1>
					</a>
					<h1 className="font-semibold text-[24px] text-green leading-tight">
						El Matador
					</h1>
					<p className="text-[20px] mt-3">- SFC kampioen MMA</p>
					<p className="text-[20px] mt-3">Cage Warriors, SFC</p>
					<Image
						src={Anthony}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default TOCSection;
