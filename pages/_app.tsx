import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

/********************* TRPC SETUP *********************/

// import "../styles/globals.css";
// import type { AppProps } from "next/app";
// import { ThemeProvider } from "next-themes";
// import { trpc } from '../utils/trpc';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default trpc.withTRPC(MyApp);
