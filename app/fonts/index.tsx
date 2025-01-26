import localFont from "next/font/local";

const inter = localFont({
  src: "./Inter.ttf",
  display: "swap",
  variable: "--font-inter",
});

const dmsans = localFont({
  src: "./DMSans.ttf",
  display: "swap",
  variable: "--font-dmsans",
});

export const interVariable = inter.variable;
export const dmsansVariable = dmsans.variable;
