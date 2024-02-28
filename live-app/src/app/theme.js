import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: (props) => ({
		body: {
			color: mode("gray.800", "#d0c8e3")(props),
			bg: mode("gray.100", "#d0c8e3")(props),
			lineHeight: "normal",
		},
	}),
};

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: true,
	},
	styles,
});

export default theme;
