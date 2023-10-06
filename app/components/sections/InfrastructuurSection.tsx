import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Infrastructuur1 from "../../../public/infrastructuur/1.png";
import Infrastructuur2 from "../../../public/infrastructuur/2.png";
import Infrastructuur3 from "../../../public/infrastructuur/3.png";
import Infrastructuur4 from "../../../public/infrastructuur/4.png";
import InfrastructuurModalComponent from "./InfrastructuurModalComponent/InfrastructuurModalComponent";
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
			<h2 className="text-[36px] font-bold text-center">Reservatie</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Omdat wij slechts een beperkt personen per dag kunnen toelaten,
				dient u uw lessen te reserveren of eerst een aanvraag te
				verrichten.
			</p>
			<AnimatePresence mode="wait">
				{modalOpen && (
					<InfrastructuurModalComponent
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
						onClick={() => openModal(1)}
						className="relative w-full h-full bg-white"
					>
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
