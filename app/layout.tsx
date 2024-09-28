import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/providers/toast-provider";

const spacemono = Space_Grotesk({
	variable: "--font-geist-sans",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "e71 LMS - Fix that skill issue you autistic monkey 🫵🏻",
	description:
		"Course learning platform by e7i, inspiration from codewithantonio(YT).",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${spacemono.className} antialiased`}>
					<ToastProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
