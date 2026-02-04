import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { LocalBusinessSchema } from "@/components/local-business-schema";

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <Services />
      <About />
    </>
  );
}
