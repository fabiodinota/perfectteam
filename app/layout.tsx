import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import AnimatePresenceProvider from "./components/AnimatePresenceProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Perfect Team MMA",
	description: "Perfect Team Mixed Martial Arts training center biedt een uitgebreid assortiment gevechtssporten aan in een professionele infrastructuur en dit onder begeleiding van top instructeurs.",
    openGraph: {
        type: "website",
        locale: "nl_BE",
        url: "https://www.perfectteam.be",
        siteName: "Perfect Team MMA",
        title: "Perfect Team MMA",
        description: "Perfect Team Mixed Martial Arts training center biedt een uitgebreid assortiment gevechtssporten aan in een professionele infrastructuur en dit onder begeleiding van top instructeurs.",
        images: [
            {
                url: "https://cdn.discordapp.com/attachments/1039234208071172187/1159931505984929822/OGImage.png?ex=6532d165&is=65205c65&hm=5cb358fd8ee5800b27e5ea96ecdda7ddf5762de2ac4be77737eb00441bc3a47f&",
                alt: "Perfect Team MMA",
            },
        ],
    },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
                <NavBar />
                <main className="flex flex-col w-full h-full pt-[100px]">
                    {children}
                </main>
                <Footer />
			</body>
		</html>
	);
}
