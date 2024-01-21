import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="md:hidden flex items-center justify-evenly border w-full rounded mx-auto absolute p-0.5 bottom-0 left-0 right-0">
      <Link href={"/"}>
        <Button variant="ghost" className="px-10 py-7">
          Home
        </Button>
      </Link>
      <Link href={"/about"}>
        <Button variant="ghost" className="px-10 py-7">
          About
        </Button>
      </Link>
      <Link href={"/contact"}>
        <Button variant="ghost" className="px-10 py-7">
          Contact
        </Button>
      </Link>
    </div>
  );
}
