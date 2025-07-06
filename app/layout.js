import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";


export const metadata = {
  title: "SmartRecco",
  description: "AI Recommendation APP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
      
    </html>
  );
}
