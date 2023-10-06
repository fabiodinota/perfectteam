import Image from "next/image";
import React from "react";
import Rooster from "../../../public/rooster/rooster.png";

const RoosterSection = () => {
	return (
		<section
			id="rooster"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">Rooster</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Mixed Martial Arts is een combinatie van verschillende
				gevechtssporten zoals kickboxing, wrestling en grappling. Wij
				trainen deze sporten zowel afzonderlijk als gecombineerd.Ook
				voor vrouwen, kleuters en kinderen zijn er meerdere lesmomenten
				per week.
			</p>
			<div className="relative w-full max-w-[800px] aspect-[20/23] px-5 mt-[50px]">
				<Image src={Rooster} alt="Rooster" fill />
			</div>
		</section>
	);
};

export default RoosterSection;
