import "@styles/globals.css";
import { Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#FF2316",
      "light-brand": "#9FDBE3",
      "accent-1": "#FF3030",
      focus: "#16C6DF",
      "light-1": "#FFFFFF",
      "light-2": "#FBFBFC",
      "dark-1": "#333333",
      "dark-2": "#444444",
    },
  },
  table: {
    body: {
      align: "center",
      pad: { horizontal: "large", vertical: "xsmall" },
      border: "horizontal",
    },
    footer: {
      border: "horizontal",
      pad: { horizontal: "large", vertical: "small" },
    },
    header: {
      align: "center",
      fill: "horizontal",
      pad: { horizontal: "large", vertical: "xsmall" },
      background: {
        color: "accent-1",
        opacity: "strong",
      },
    },
  },
});

function Application({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default Application;
