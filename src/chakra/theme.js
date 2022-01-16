import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
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
      backgroundColor: colors.blue,
      color: colors.white[100],
      _hover: { backgroundColor: "#60ABFF" },
    },
    sizes: {
      sm: {
        width: "84px",
        height: "46px",
        fontSize: "14px",
      },
      md: {
        width: "106px",
        height: "50px",
        fontSize: "16px",
      },
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
  Input: {
    baseStyle: ({ colorMode }) => ({
      field: {
        backgroundColor:
          colorMode === "light" ? colors.white[100] : colors.blackBlue,
        boxShadow: "md",
        borderRadius: "15px",
        "::placeholder": {
          color: colorMode === "light" ? colors.navyBlue : colors.white[100],
        },
      },
    }),
    sizes: {
      sm: {
        field: {
          height: "60px",
          fontSize: "13px",
          lineHeight: "25px",
        },
      },
      md: {
        field: {
          height: "69px",
          fontSize: "18px",
          lineHeight: "25px",
        },
      },
    },
    defaultProps: {
      variant: null,
      size: "md",
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
  ResultBox: {
    baseStyle: ({ colorMode }) => ({
      marginTop: "24px",
      borderRadius: "15px",
      boxShadow: "sm",
      backgroundColor:
        colorMode === "light" ? colors.white[100] : colors.blackBlue,
    }),
  },
  StatusBox: {
    baseStyle: ({ colorMode }) => ({
      width: "100%",
      backgroundColor: colorMode === "light" ? colors.lightWhite : colors.black,
      borderRadius: "md",
      px: "32px",
      py: "15px",
    }),
  },
  Socials: {
    baseStyle: {
      display: "flex",
      gap: "19px",
      fontSize: "15px",
      lineHeight: "22.22px",
    },
  },
}

const fonts = {
  heading: "Space Mono",
  body: "Space Mono",
}

const styles = {
  global: ({ colorMode }) => ({
    body: {
      backgroundColor: colorMode === "light" ? colors.lightWhite : colors.black,
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
      color: colors.blue,
    },
    h4: {
      fontSize: { base: "13px" },
      lineHeight: "20px",
    },
  }),
}

const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "blue", components: ["Button"] }),
  {
    config,
    components,
    styles,
    fonts,
    colors,
  }
)
export default theme
