import { Button } from "../../components/ui/button";
import { Facebook, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="px-5 mx-auto flex items-start gap-5 justify-center flex-col h-screen w-96">
        <p className="text-2xl font-semibold mb-10 ml-3">Contact</p>
      <div className="flex items-center gap-2.5">
        {" "}
        <Button className="rounded-full w-12 h-12 p-3" variant={"outline"}>
          <PhoneCall />
        </Button>{" "}
        09663497755
      </div>
      <Link href={""} className="flex items-center gap-2.5">
        <Button className="rounded-full w-12 h-12 p-3" variant={"outline"}>
          <Mail className="" />
        </Button> sengaung371@gmail.com
      </Link>
      <div className="flex items-center gap-2.5">
        <Button className="rounded-full w-12 h-12 p-3" variant={"outline"}>
          <MapPin />
        </Button> Yanpyay(14), Tharkhaeta, Yangon.
      </div>
      <Link href={"https://www.facebook.com/hpawgaikyukoke910"} className="flex items-center gap-2.5 w-full break-all">
        <Button className="rounded-full w-12 h-12 p-3" variant={"outline"}>
          <Facebook /> 
        </Button> https://www.facebook.com/hpawgaikyukoke910
      </Link>
    </div>
  );
}
