import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: `Ragin' Riders - Motorcycle Parts, Accessories & More`,
	description:
		"Website that sells motorcycle parts and accessories with a focus on sport bikes",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
