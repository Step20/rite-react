import React from "react";
import { PageNav } from "../components/NavComponent";
import { Home } from "../components/HomeComponent";
import { Under } from "../components/UnderComponent";
import { Adv } from "../components/AdvComponent";
import { Under2 } from "../components/Under2Component";
import { Collab } from "../components/CollabComponent";
import { Under3 } from "../components/Under3Component";
import { Footer } from "../components/FooterComponent";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Main() {
  return (
    <div>
      {" "}
      <PageNav />
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <Under />
      <Adv />
      <Under2 />
      <Collab />
      <Under3 />
      <Footer />
    </div>
  );
}
