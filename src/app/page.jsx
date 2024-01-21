'use client'
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import "./globals.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "L SENG LI AUNG",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "HPAWGAI",
              1000,
              "L SENG LI AUNG"
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "2.5em",fontWeight: 800, display: "inline-block", fontFamily: "inherit" }}
            repeat={Infinity}
          />
          {/* <p className="text-5xl font-bold">L SENG LI AUNGL SENG LI AUNG</p> */}
          <p className="text-2xl">Artist</p>
        </div>
        <Link href={"/gallery"}>
          <Button className="px-10">Explore</Button>
        </Link>
      </div>
    </div>
  );
}
