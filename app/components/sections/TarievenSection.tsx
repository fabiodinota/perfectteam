import React from "react";

const TarievenSection = () => {
	return (
		<section
			id="tarieven"
			className="w-full h-full flex justify-center items-center flex-col pt-[100px] px-5 max-w-[1300px]"
		>
			<h2 className="text-[36px] font-bold text-center">Tarieven</h2>
			<p className="text-[20px] max-w-[800px] text-center pt-3">
				Wij hanteren volgende tariefformules.
			</p>
			<div className="flex justify-center items-center w-full flex-col lg:flex-row gap-5 mt-[50px]">
				<div className="border border-[#3C3C3C] w-full max-w-[500px] h-[400px] flex flex-col justify-center items-center p-5">
					<h1 className="font-semibold text-[28px] mt-3 flex justify-center">
						Mini
						<span className="opacity-50 pl-3 text-[24px]">
							(2,5 - 5 jaar)
						</span>
					</h1>
					<h1 className="leading-tight">
						<span className="font-semibold text-[40px] text-green">
							€
						</span>
						<span className="text-[140px] font-bold">90</span>
					</h1>
					<p className="text-[20px] opacity-50 font-semibold">
						3 Maanden Abonnement
					</p>
					<p className="text-[20px] text-center">
						Deelname aan de Mini Movement bewegingslessen voor
						kleuters.
					</p>
				</div>
				<div className="border border-[#3C3C3C] w-full max-w-[500px] h-[400px] flex flex-col justify-center items-center p-5">
					<h1 className="font-semibold text-[28px] mt-3 flex justify-center">
						Kids
						<span className="opacity-50 pl-3 text-[24px]">
							(6 - 14 jaar)
						</span>
					</h1>
					<h1 className="leading-tight">
						<span className="font-semibold text-[40px] text-green">
							€
						</span>
						<span className="text-[140px] font-bold">120</span>
					</h1>
					<p className="text-[20px] opacity-50 font-semibold">
						3 Maanden Abonnement
					</p>
					<p className="text-[20px] text-center">
						Onbeperkte deelname aan alle kinder- en jeugdlessen uit
						ons rooster.
					</p>
				</div>
				<div className="border border-[#3C3C3C] w-full max-w-[500px] h-[400px] flex flex-col justify-center items-center p-5">
					<h1 className="font-semibold text-[28px] mt-3 flex justify-center">
						Adult
					</h1>
					<h1 className="leading-tight">
						<span className="font-semibold text-[40px] text-green">
							€
						</span>
						<span className="text-[140px] font-bold">180</span>
					</h1>
					<p className="text-[20px] opacity-50 font-semibold">
						3 Maanden Abonnement
					</p>
					<p className="text-[20px] text-center">
						Onbeperkte deelname aan alle lessen uit ons rooster voor
						volwassenen.
					</p>
				</div>
			</div>
		</section>
	);
};

export default TarievenSection;
