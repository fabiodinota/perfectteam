import HeroSection from "./components/sections/HeroSection";
import IntroductionSection from "./components/sections/IntroductionSection";
import AanbodSection from "./components/sections/AanbodSection";
import LesgeversSection from "./components/sections/LesgeversSection";
import RoosterSection from "./components/sections/RoosterSection";
import ReservatieSection from "./components/sections/ReservatieSection";
import TarievenSection from "./components/sections/TarievenSection";
import InfrastructuurSection from "./components/sections/InfrastructuurSection";
import LocatieSection from "./components/sections/LocatieSection";
import TOCSection from "./components/sections/TOCSection";
import Image from "next/image";
import Sportschool from "../public/erkende_sportschool.png";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="w-full h-full flex justify-center items-center flex-col">
				<div className="h-full w-full flex flex-col justify-center items-center max-w-[1300px]">
					<IntroductionSection />
					<AanbodSection />
					<LesgeversSection />
					<RoosterSection />
					<ReservatieSection />
					<TarievenSection />
					<InfrastructuurSection />
					<LocatieSection />
					<TOCSection />
					<ContactSection />
					<div className="relative max-w-[800px] w-full h-[500px]">
						<Image
							src={Sportschool}
							alt="erkende sportschool"
							className="object-contain p-5 lg:p-0"
							fill
						/>
					</div>
				</div>
			</div>
		</>
	);
}
