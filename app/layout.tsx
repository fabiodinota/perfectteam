import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Perfect Team MMA",
	description: "Perfect Team Mixed Martial Arts training center biedt een uitgebreid assortiment gevechtssporten aan in een professionele infrastructuur en dit onder begeleiding van top instructeurs.",
    themeColor: "#B0F945",
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
                width: 1200,
                height: 630,
            },
            {
                url: "https://cdn.discordapp.com/attachments/1039234208071172187/1159936260387905728/smallOGImage.png?ex=6532d5d3&is=652060d3&hm=7704dedfd6e2d9a02a11c5d81d33ea9e282e71d127fffafb9792d963d781f323&",
                alt: "Perfect Team MMA",
                width: 600,
                height: 315,
            }
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
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
			<body className={spaceGrotesk.className}>
                <NavBar />
                <main className="flex flex-col w-full h-full pt-[100px]">
                    {children}
                </main>
                <Footer />
			</body>
		</html>
	);
}
