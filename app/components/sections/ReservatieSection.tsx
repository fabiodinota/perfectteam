import Link from "next/link";
import React from "react";

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
				<div className="background_lessen w-full h-[600px] flex justify-end items-start flex-col p-5">
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
						<Link href="">Reserveer Les</Link>
					</button>
				</div>
				<div
					id="proefles"
					className="background_proeflessen w-full h-[600px] flex justify-end items-start flex-col p-5"
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
						<Link href="">Vraag Proefles Aan</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ReservatieSection;
