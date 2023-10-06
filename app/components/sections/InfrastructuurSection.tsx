"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Infrastructuur1 from "../../../public/infrastructuur/1.png";
import Infrastructuur2 from "../../../public/infrastructuur/2.png";
import Infrastructuur3 from "../../../public/infrastructuur/3.png";
import Infrastructuur4 from "../../../public/infrastructuur/4.png";
import ModalComponent from "./ModalComponent/ModalComponent";
import { AnimatePresence } from "framer-motion";

const InfrastructuurSection = () => {
	const [modalIndex, setModalIndex] = useState<number>(0);
	const [modalOpen, setModalOpen] = useState<boolean>();

	const openModal = (index: number) => {
		setModalIndex(index);
		setModalOpen(!modalOpen);
	};

	const images = [
		Infrastructuur1,
		Infrastructuur2,
		Infrastructuur3,
		Infrastructuur4,
	];

	return (
		<section
			id="infrastructuur"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5 max-w-[1300px]"
		>
			<h2 className="text-[36px] font-bold text-center">
				Infrastructuur
			</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Onze sportschool is voorzien van een officiële MMA
				wedstrijdkooi, matruimte, kooiwanden, matwanden, bokszak- en
				krachtruimte. De ideale plek om Mixed Martial Arts en
				aanverwante gevechtssporten te beoefenen.
			</p>
			<AnimatePresence mode="wait">
				{modalOpen && (
					<ModalComponent
                        key={modalIndex}
						images={images}
						onClick={() => setModalOpen(!modalOpen)}
						slideIndex={modalIndex}
					/>
				)}
			</AnimatePresence>
			<div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 place-content-center w-full h-[250vh] lg:h-screen gap-5 mt-[50px]">
				{images.map((image, index) => (
					<div
						key={index}
						onClick={() => openModal(index)}
						className="relative w-full h-full bg-white group"
					>
						<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 duration-300 z-10">
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
							className="object-cover"
							alt={`infrastructuur${index}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default InfrastructuurSection;
