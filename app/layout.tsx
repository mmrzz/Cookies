import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./UI/components/header";
import Footer from "./UI/components/footer";

import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cookies",
	description: "find your favorite food recipes here",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body
				className={`${roboto.className} antialiased tracking-tighter text-foreground min-h-screen`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
