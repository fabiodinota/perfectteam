import Link from "next/link";
import Image from "next/image";
import React from "react";
import Lessen from "../../../public/reservatie/lessen.png";
import ProefLessen from "../../../public/reservatie/proeflessen.png";

const ReservatieSection = () => {
	return (
		<section
			id="reservatie"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5 max-w-[1300px]"
		>
			<h2 className="text-[36px] font-bold text-center">Reservatie</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Omdat wij slechts een beperkt personen per dag kunnen toelaten,
				dient u uw lessen te reserveren of eerst een aanvraag te
				verrichten.
			</p>
			<div className="flex justify-center items-center w-full flex-col lg:flex-row gap-5 mt-[50px]">
				<div className="relative w-full h-[600px] flex justify-end items-start flex-col p-5">
					<h1 className="font-semibold text-[28px] mt-3">
						Reserveer Lessen Online
					</h1>
					<p className="text-[20px]">
						Omdat er maximum 50 personen kunnen deelnemen per les,
						dient u de lessen online te reserveren via ons
						reservatie systeem. Geen reservatie = geen toegang.
						Reservatie systeem is enkel toegankelijk voor actieve
						abonnementen!
					</p>
					<button className="px-20 mt-5 h-[60px] bg-green text-background">
						<a aria-label="les_reservatie" href="https://perfectteam.be/ptms/aanmelden.php">Reserveer Les</a>
					</button>
					<Image
						src={Lessen}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
				<div
					id="proefles"
					className="relative w-full h-[600px] flex justify-end items-start flex-col p-5"
				>
					<h1 className="font-semibold text-[28px] mt-3">
						Aanvragen Proefles
					</h1>
					<p className="text-[20px]">
						Wil u graag eens komen proefdraaien? Dit kan, maar enkel
						op afspraak. Vraag uw proefles minstens 2 uur voor
						aanvang van de gewenste les aan.
					</p>
					<button className="px-20 mt-5 h-[60px] bg-green text-background">
						<a aria-label="proefles_reservatie" href="https://perfectteam.be/ptms/aanvraagproefles.php">Vraag Proefles Aan</a>
					</button>
					<Image
						src={ProefLessen}
						alt="image"
						fill
						className="object-cover -z-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default ReservatieSection;
