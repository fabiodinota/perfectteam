import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../../public/hero/heroimage.png";
import Link from "next/link";

const HeroSection = () => {
    const { scrollY } = useScroll();
    const heroImageY = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <section id="home" className="h-[86dvh] overflow-hidden relative flex justify-center items-end">
        <div className="w-screen max-w-[1300px] mx-5 relative z-10 mb-20">
            <h1 className="text-[14vw] sm:text-[10vw] md:text-[9vw] lg:text-[100px] whitespace-nowrap leading-tight font-bold">
                <span className="flex flex-row gap-3 sm:gap-5 overflow-hidden">
                    <motion.span className="" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.0, ease: [0.200,0.005,0.000,0.995] }}>
                        Perfect
                    </motion.span>
                    <motion.span className="" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.200,0.005,0.000,0.995] }}>
                        Team
                    </motion.span>
                    <motion.span className="hidden sm:block" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.200,0.005,0.000,0.995] }}>
                        MMA
                    </motion.span>
                </span>
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="text-[20px] md:text-[24px] max-w-[800px] pr-5 pb-5">Bij Perfect Team MMA combineren we topinstructie met eersteklas faciliteiten in Deurne. Voor beginners tot pro&apos;s: sluit je aan bij ons kampioensteam!</p>
            <button  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="px-20 h-[60px] bg-green text-background">
                <Link href="">
                    Train bij ons!
                </Link>
            </button>
        </div>
        <motion.div className="h-full absolute top-0 left-0 w-screen z-0" style={{ y: heroImageY }}>
            <Image loading="eager" src={HeroImage} fill className="object-cover" alt={""} />
        </motion.div>
    </section>
  )
}

export default HeroSection