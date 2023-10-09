import Image from "next/image";
import React from "react";
import AanbodComponent from "./AanbodComponent/AanbodComponent";
import MMA from "../../../public/aanbod/mma.png";
import Kickboxing from "../../../public/aanbod/kickboxing.png";
import Grappling from "../../../public/aanbod/grappling.png";
import Crossfight from "../../../public/aanbod/crossfight.png";
import Socials from "./AanbodComponent/Socials";
import MiniMovement from "../../../public/aanbod/minimovement.png";
import Kickboxing4Kids from "../../../public/aanbod/kickboxing4kids.png";
import MMA4Kids from "../../../public/aanbod/mma4kids.png";
import Women from "../../../public/aanbod/women.png";

const AanbodSection = () => {
	return (
		<section
			id="aanbod"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">Aanbod</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Ons lessenrooster voorziet lessen voor alle leeftijden en
				niveaus. Ervaring is een pluspunt maar zeker geen vereiste. Kom
				gerust een gratis proeflesje volgen en overtuig jezelf.
			</p>
			<AanbodComponent
				image={MMA}
				title="Mixed Martial Arts"
				description="MMA is een full contact gevechtssport waarbij het toegestaan is om gebruik te maken van stoot- en traptechnieken, worpen, klemmen en wurgingen op de grond. Deze sport wordt zowel staande als op de grond beoefend en bestaat uit een greep aan technieken uit andere gevechtssporten. Kom mee trainen met ons, werk aan je technieken en conditie en beleef vooral veel plezier!"
				imageSide="left"
			/>
			<AanbodComponent
				image={Kickboxing}
				title="Kickboxing"
				description="Kickboxing is een staande gevechtssport waarbij stoot- en traptechnieken centraal staan, maar maakt ook gebruik van knie- en elleboogtechnieken. Mixed Martial Arts start steeds in het staande gevecht, daarom moeten de beoefenaars voorbereid zijn op alle mogelijke scenario's. Het gevecht kan immers ook staande beëindigd worden met een KO door een trap- of stootcombinatie."
				imageSide="right"
			/>
			<AanbodComponent
				image={Grappling}
				title="Grappling & Wrestling"
				description="Wrestling is de ideale sport om je tegenstander naar de grond te krijgen d.m.v. takedowns en worpen. Eenmaal op de grond gebruiken we grappling om het gevecht te beëindigen d.m.v. klem- en wurgtechnieken. De effectiviteit van deze gevechtssporten werd veelvuldig bewezen tijdens wedstrijden en vormt daardoor een enorme goede basis voor het MMA."
				imageSide="left"
			/>
			<AanbodComponent
				image={Crossfight}
				title="Crossfight"
				description="Omdat Mixed Martial Arts een enorme fysieke conditie vereist, bieden wij ons Cross Fight combat conditioning programma aan. Tijdens deze intensieve workout gaan we plyometrische oefeningen combineren met oefeningen uit de diverse gevechtssporten. Deze workout is ook uitermate geschikt voor iedereen die goed in vorm wil geraken en wat extra calorieën wenst te verbranden."
				imageSide="right"
			/>
			<Socials
				facebook
				instagram
				youtube
				Text="Volg ons op Social Media"
				color={"#B0F945"}
			/>
			<iframe
				className="max-w-[1000px] aspect-video h-full w-full mt-[65px]"
				loading="lazy"
				src="https://www.youtube.com/embed/BIKoGS9h2HY"
				title="A day at the Perfect Team, Team Of Champions (vol.1)"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>

			<AanbodComponent
				image={MiniMovement}
				title="Mini Movement"
				age="(2,5 tot 5 jaar)"
				description="Bij onze Mini Movement lessen richten we ons tot de allerkleinsten. Bij deze lessen staan beweging en spel centraal. Samen ravotten, trekken en duwen, zingen en boksen. Het kan allemaal. Een les waar onze kleinsten zich eens goed kunnen uitleven."
				imageSide="left"
			/>
			<AanbodComponent
				image={Kickboxing4Kids}
				title="Kickboxing 4 Kids"
				age="(6 tot 14 jaar)"
				description="Het staande gevecht is een belangrijk onderdeel van het MMA, om deze reden willen wij onze jeugd enkele aparte lessen aanbieden om deze discipline goed onder de knie te krijgen."
				imageSide="right"
			/>
			<AanbodComponent
				image={MMA4Kids}
				title="Mixed Martial Arts 4 Kids"
				age="(6 tot 14 jaar)"
				description='Omdat je als kind snel dingen aanleert, luidt ons motto: "jong geleerd is oud gedaan". Ons MMA 4 Kids programma, laat kinderen kennis maken met verschillende facetten uit diverse gevechtssporten. Ook omgaan met winst en verlies is een belangrijk punt. Spel en plezier staan in deze lessen centraal.'
				imageSide="left"
			/>
			<Socials
				facebook
				instagram
				Text="Volg onze kids op Social Media"
				color={"#F28927"}
			/>
			<div
				className={`w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10 max-w-[1300px] mt-[100px]`}
			>
				<div className="relative w-full max-w-[700px] lg:w-[550px] flex-shrink-0 aspect-[638/425]">
					<Image
						sizes="400px"
						src={Women}
						quality={100}
						fill
						className="object-contain relative z-0"
						alt="map"
					/>
				</div>
				<div
					className={`flex flex-col justify-center items-start max-w-[700px]`}
				>
					<h1 className="text-[22px] sm:text-[28px] pb-2 font-semibold flex justify-center items-start flex-col">
						<span className="text-[24px] opacity-50">
							Ladies Only
						</span>
						By Victory Fight To Be Fit
					</h1>
					<p className="text-[20px] sm:pb-0 font-extralight">
						Ben je een vrouw en ben je op zoek naar een leuke ladies
						only groepsworkout geschikt voor alle niveaus? Hou je
						van kickboksen, HIIT, kracht- en crosstraining?
						<br />
						<br />
						Maak een reservatie via de Victoria Fight To Be Fit
						website:
						<br />
						<br />
						<a target="_blank" aria-label="Victory Fight To Be Fit Website" className="text-green" href="https://www.victoryfighttobefit.be/">
							Victory Fight To Be Fit Website{" "}
						</a>
					</p>
				</div>
			</div>
			<Socials
				facebook
				instagram
				Text="Volg onze ladies op Social Media"
				color={"#ED74DA"}
			/>
		</section>
	);
};

export default AanbodSection;
