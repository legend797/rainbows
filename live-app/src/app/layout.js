import { ColorModeScript } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { lato } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";
import theme from "./theme";


export const metadata = {
	title: "Rainbow LGBT SHOW",
	description: "LGBT SHOW",
};

export default async function RootLayout(props) {
	return (
		<html lang="en">
			<head>
				{" "}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>{" "}
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>{" "}
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>{" "}
				<link rel="manifest" href="/site.webmanifest" />{" "}
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />{" "}
				<meta name="msapplication-TileColor" content="#da532c" />{" "}
				<meta name="theme-color" content="#ffffff" />{" "}
			</head>
			<body className={lato.className}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Providers>
						<main style={{ minHeight: '100vh' }}>
							{props.children}
						</main>
				</Providers>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
