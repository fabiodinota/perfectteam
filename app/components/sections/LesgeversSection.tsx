import Image from "next/image";
import React from "react";
import Ben from "../../../public/lesgevers/ben.png";
import Chris from "../../../public/lesgevers/chris.png";
import Mo from "../../../public/lesgevers/mo.png";
import Tarik from "../../../public/lesgevers/tarik.png";
import Youssef from "../../../public/lesgevers/youssef.png";
import Anthony from "../../../public/lesgevers/anthony.png";
import Victoria from "../../../public/lesgevers/victoria.png";

const LesgeversSection: React.FC = () => {
	return (
		<section
			id="lesgevers"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5"
		>
			<h2 className="text-[36px] font-bold text-center">Lesgevers</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Elk van onze lesgevers heeft zijn of haar specialiteit in één of
				meerdere gevechtssporten. De meeste van onze lesgevers zijn
				gewezen of recente Mixed Martial Arts kampioenen of hebben
				titels behaald in diverse gevechtssporten. Bij Perfect Team
				train je onder begeleiding van echte experten.
			</p>
			<div className="flex flex-col justify-center items-center w-full max-w-[1300px] mt-[50px] px-5 gap-5 md:gap-10">
				<div className="flex flex-col sm:flex-row gap-10 sm:gap-5 md:gap-10 w-full sm:w-auto">
					<div className="flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Ben} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Ben Dandois
						</h1>
						<p className="text-[20px]">Head Coach</p>
					</div>
					<div className="flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Chris} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Chris Van Boom
						</h1>
						<p className="text-[20px]">Assistant Head Coach</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-10 sm:gap-5 md:gap-10  w-full sm:w-auto">
					<div className="flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Mo} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Mo Toualla
						</h1>
						<p className="text-[20px]">Striking Coach</p>
					</div>
					<div className="flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Tarik} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Tarik Jaaidi
						</h1>
						<p className="text-[20px]">Striking Coach</p>
					</div>
					<div className="hidden lg:flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Youssef} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Youssef Addib
						</h1>
						<p className="text-[20px]">MMA Coach</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row gap-10 sm:gap-5 md:gap-10  w-full sm:w-auto">
					<div className="flex lg:hidden justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Youssef} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Youssef Addib
						</h1>
						<p className="text-[20px]">MMA Coach</p>
					</div>
					<div className="flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Anthony} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Anthony Lambrechts
						</h1>
						<p className="text-[20px]">MMA Coach</p>
					</div>
					<div className="hidden lg:flex justify-center items-center flex-col w-full sm:w-auto">
						<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
							<Image src={Victoria} fill alt="Ben Dandois" />
						</div>
						<h1 className="font-semibold text-[28px] mt-3">
							Victoria Sabbar
						</h1>
						<p className="text-[20px]">Kids & Ladies Coach</p>
					</div>
				</div>
				<div className="flex lg:hidden justify-center items-center flex-col w-full sm:w-auto mt-5">
					<div className="relative rounded-full w-full max-w-[400px] aspect-square sm:w-[300px] sm:h-[300px] lg:w-[300px] lg:h-[300px]">
						<Image src={Victoria} fill alt="Ben Dandois" />
					</div>
					<h1 className="font-semibold text-[28px] mt-3">
						Victoria Sabbar
					</h1>
					<p className="text-[20px]">Kids & Ladies Coach</p>
				</div>
			</div>
		</section>
	);
};

export default LesgeversSection;
