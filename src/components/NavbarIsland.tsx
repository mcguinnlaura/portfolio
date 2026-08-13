import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";

export default function NavbarIsland() {
  return (
    <ThemeProvider attribute="class" forcedTheme="light">
      <TooltipProvider delayDuration={0}>
        <Navbar />
      </TooltipProvider>
    </ThemeProvider>
  );
}
