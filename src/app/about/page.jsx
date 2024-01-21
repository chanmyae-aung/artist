import React from "react";

export default function About() {
  return (
    <div className="mx-auto md:w-[60rem] w-full px-5 mt-16 md:mt-0 h-screen flex flex-col md:flex-row items-center gap-5">
      <div className="md:w-[50%] h-96">
        <img className="w-full h-full object-cover" src="/profile.png" alt="" />
      </div>
      <div className="md:w-[50%]">
        <p className="text-3xl font-bold">L Seng Li Aung</p>
        <p className="text-xl font-semibold mb-5">Artist</p>
        <p>
          A passionate and dedicated comic book artist and colorist with a deep
          love for storytelling and the power of visual narratives. I'm
          constantly honing my craft, experimenting with different styles and
          techniques, and always eager to learn new things. I'm particularly
          drawn to Anime, animation, cartoons and I love finding ways to bring
          characters and worlds to life in a dynamic and engaging way.
        </p>
      </div>
    </div>
  );
}
