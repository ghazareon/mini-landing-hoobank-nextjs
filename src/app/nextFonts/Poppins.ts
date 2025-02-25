/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import localFont from "next/font/local";

export const Lufga = localFont({
 src: [
  {
   path: "../../shared/ui/assets/fonts/Poppins-Regular.ttf",
   weight: "400",
   style: "normal"
  },
  {
   path: "../../shared/ui/assets/fonts/Poppins-Medium.ttf",
   weight: "500",
   style: "normal"
  },

  {
   path: "../../shared/ui/assets/fonts/Poppins-SemiBold.ttf",
   weight: "600",
   style: "normal"
  }
 ],

 variable: "--font-family-primary",
 fallback: ["sans-serif"],
 display: "block"
});
