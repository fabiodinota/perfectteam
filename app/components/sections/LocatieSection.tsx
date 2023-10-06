import React from "react";

const LocatieSection = () => {
	return (
		<section
			id="locatie"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">Locatie</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Onze locatie is gevestigd in de gemeente Deurne bij Antwerpen en
				is gemakkelijk bereikbaar met het openbaar vervoer.
			</p>
			<div className="relative w-full max-w-[1000px] aspect-video mt-[50px]">
				<iframe
					className="w-full h-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.7603933252512!2d4.478774496026325!3d51.2191400763281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f71552bf19b1%3A0x382fb16ab46cd659!2sPerfect%20Team%20MMA!5e0!3m2!1sen!2sbe!4v1696605766340!5m2!1sen!2sbe"
					loading="lazy"
				></iframe>
			</div>
		</section>
	);
};

export default LocatieSection;
