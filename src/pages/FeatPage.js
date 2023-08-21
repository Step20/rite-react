import React from "react";
import { PageNav } from "../components/NavComponent";
import { FeatCom } from "../components/FeatComponent";
import { Collab } from "../components/CollabComponent";
import { Footer } from "../components/FooterComponent";

export default function Features() {
  return (
    <div>
      <PageNav />
      <FeatCom />
      <Collab />
      <Footer />
    </div>
  );
}
