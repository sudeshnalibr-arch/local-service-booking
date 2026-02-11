"use client";

import { useState } from "react";
import TeamBanner from "@/components/serviceteamlayout/teambanner/teamBanner";
import TeamIsotop from "@/components/serviceteamlayout/teamisotop/teamIsotop";

export default function ServiceTeamPage() {
  const [activeFilter, setActiveFilter] = useState(1); // 👈 SINGLE SOURCE

  return (
    <>
      <TeamBanner activeFilter={activeFilter} />
      <TeamIsotop
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </>
  );
}


