import Image from "next/image";
import p1 from "../assets/photo1.jpg";
import p2 from "../assets/photo2.jpg";
import p3 from "../assets/photo3.jpg";
import p4 from "../assets/photo4.jpg";
import p5 from "../assets/photo5.jpg";
import p6 from "../assets/photo6.jpg";
import p7 from "../assets/photo7.jpg";
import p8 from "../assets/photo8.jpg";

import React from "react";

 const ImageCard = () => {
  return (
    // Container
    <div className="max-w-[1215px] max-h-[678px] mx-auto flex flex-col gap-y-2">
      {/* First Row */}
      <div className=" flex justify-between ">
        <Image src={p1} alt="p1" className="max-w-[240px] max-h-[426px] rounded-lg" />
        <Image src={p2} alt="p2" className="max-w-[240px] max-h-[426px] rounded-lg" />
        <Image src={p3} alt="p3" className="max-w-[568px] max-h-[426px] rounded-lg" />
        <Image src={p8} alt="p8" className="max-w-[129px] max-h-[426px] rounded-lg" />
      </div>

      {/* Second Row */}
        <div className="flex justify-between">
        <Image src={p5} alt="p5" className="max-w-[426px] max-h-[240px] rounded-lg" />
        <Image src={p6} alt="p6" className="max-w-[426px] max-h-[240px] rounded-lg" />
        <Image src={p7} alt="p7" className="max-w-[340px] max-h-[240px] rounded-lg" />



        </div>

    </div>
  );
};
export default ImageCard;
