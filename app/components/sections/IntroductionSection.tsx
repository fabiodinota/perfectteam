import React from "react";

const IntroductionSection = () => {
	return (
		<section
			id="introduction"
			className="w-full h-full flex justify-center items-center flex-col mt-[50px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">
				Perfect Team MMA Training Center.
			</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Perfect Team Mixed Martial Arts training center biedt een
				uitgebreid assortiment gevechtssporten aan in een professionele
				infrastructuur en dit onder begeleiding van top instructeurs.
			</p>
			{/* <iframe
				className="max-w-[1000px] aspect-video h-full w-full mt-[65px]"
				loading="lazy"
				src="https://www.youtube.com/embed/Of1usV4RGyw"
				title="A day at the Perfect Team, Team Of Champions (vol.1)"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe> */}
		</section>
	);
};

export default IntroductionSection;
