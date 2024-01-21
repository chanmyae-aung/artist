"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <div className="absolute bottom-20 right-20 hidden md:flex animate-bounce">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className={"rounded-full w-12 h-12 p-2"}>
            <Menu />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center gap-2 w-fit rounded mx-auto sticky p-0.5  top-10 left-0 right-0">
            <DialogClose asChild>
              <Link href={"/"}>
                <Button variant="ghost" className="px-10">
                  Home
                </Button>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link href={"/about"}>
                <Button variant="ghost" className="px-10">
                  About
                </Button>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link href={"/contact"}>
                <Button variant="ghost" className="px-10">
                  Contact
                </Button>
              </Link>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
