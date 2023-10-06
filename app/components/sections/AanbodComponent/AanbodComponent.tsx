import Image, { StaticImageData } from "next/image";
import React from "react";

interface AanbodComponentProps {
	image: StaticImageData;
	title: string;
	description: string;
	imageSide: string;
	age?: string;
}

const AanbodComponent = ({
	image,
	title,
	description,
	imageSide,
	age,
}: AanbodComponentProps) => {
	return (
		<div
			className={`w-full h-full flex ${
				imageSide === "right" ? "flex-col-reverse" : "flex-col"
			} lg:flex-row justify-center items-center gap-10 max-w-[1300px] mt-[100px]`}
		>
			{imageSide === "left" && (
				<div className="relative w-full max-w-[700px] lg:w-[550px] flex-shrink-0 aspect-[638/425]">
					<Image
						sizes="400px"
						src={image}
						quality={100}
						fill
						className="object-contain relative z-0"
						alt="map"
					/>
				</div>
			)}

			<div
				className={`flex flex-col justify-center items-start max-w-[700px]`}
			>
				<h1 className="text-[22px] sm:text-[28px] pb-2 font-semibold flex justify-center items-center">
					{title}
					{age && (
						<span className="pl-3 text-[16px] sm:text-[24px] font-light opacity-50 whitespace-nowrap">
							{age}
						</span>
					)}
				</h1>
				<p className="text-[20px] sm:pb-0 font-extralight">
					{description}
				</p>
			</div>

			{imageSide === "right" && (
				<div className="relative w-full max-w-[700px] lg:w-[550px] flex-shrink-0 aspect-[638/425]">
					<Image
						sizes="400px"
						src={image}
						quality={100}
						fill
						className="object-contain relative z-0"
						alt="map"
					/>
				</div>
			)}
		</div>
	);
};

export default AanbodComponent;
