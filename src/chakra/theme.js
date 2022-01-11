import { extendTheme } from "@chakra-ui/react"
import "@fontsource/space-mono"

const config = { initialColorMode: "light", useSystemColorMode: false }

const colors = {
  blue: "#0079ff",
  gray: "#697C9A",
  navyBlue: "#4B6A9B",
  darkGray: "#2B3442",
  lightWhite: "#F6F8FF",
  white: { 200: "#FEFEFE", 100: "#FFFFFF" },
  black: "#141D2F",
  blackBlue: "#1E2A47",
}

const components = {
  Button: {
    baseStyle: {
      width: "106px",
      height: "50px",
      backgroundColor: colors.blue,
      color: colors.white[100],
      margin: "12.5px, 23px",
    },
    sizes: {
      sm: {
        fontSize: "16px",
        fontWeight: "normal",
      },
    },
    defaultProps: {
      sizes: "sm",
    },
  },
  Heading: {
    variants: {
      "page-title": {
        fontSize: "26px",
        lineHeight: "38px",
        fontWeight: "bold",
      },
    },
  },
  Toggle: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "light" ? colors.navyBlue : colors.white[100],
      path: {
        fill: colorMode === "light" ? colors.navyBlue : colors.white[100],
      },
      _hover: {
        color: colorMode === "light" ? "black" : colors.navyBlue,
        path: {
          fill: colorMode === "light" ? "black" : colors.navyBlue,
        },
      },
      cursor: "pointer",
      display: "flex",
      width: "89px",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "2.5px",
      lineHeight: "19.5px",
    }),
  },
}

const fonts = {
  heading: "Space Mono",
  body: "Space Mono",
}

const styles = {
  global: ({ colorMode }) => ({
    body: {
      backgroundColor: colorMode === "light" ? "lightWhite" : "blackBlue",
      fontSize: { base: "15px" },
      lineHeight: "25px",
    },
    h2: {
      fontSize: { base: "22px" },
      lineHeight: "33px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: { base: "16px" },
      lineHeight: "24px",
    },
    h4: {
      fontSize: { base: "13px" },
      lineHeight: "20px",
    },
  }),
}

const theme = extendTheme({ config, components, styles, fonts, colors })
export default theme
