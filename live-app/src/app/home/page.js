import React from "react";
import localFont from "next/font/local";


import Image from "next/image";

import logo from "../assets/Logo1.png";
import logoMobile from "../assets/logo-mobile.png";
import pre1 from "../assets/live-preview1.png";
import pre2 from "../assets/live-preview2.png";

import imageTablet from "../assets/image-tablet.png";
import imageMobile from "../assets/image-mobile.png";

import TicketForm from "./TicketForm";
import ImageCard from "./ImageCard";

import VideoCard from "../components/VideoCard";
import SwiperImage from "./SwiperImage";

const myFont = localFont({ src: "../fonts/Khyay-Regular.ttf" });
const Font2 = localFont({ src: "../fonts/MMTaunggyi.ttf" });

const Home = () => {
  return (
    <main className="bg-[#16002b]  mx-auto h-auto">
      <div className="home-hero  max-container mx-auto h-[538px] max-md:h-auto">
        <div className="pt-[275px] flex justify-center">
          <Image src={logo} className="md:hidden w-[97px]" />
          <Image src={logo} className="max-md:hidden w-[194px] h-auto" />
        </div>
      </div>

      <div className="max-md:w-[271px] text-center mx-auto">
        <p
          style={myFont.style}
          className="mb-8 text-[#FF8C8C] md:text-4xl max-md:text-[24px] max-md:w-[271px] text-center"
        >
          “မကြော်ကောက်စတမ်း အခြော်ကောက် အစွမ်း”
        </p>
      </div>

      <p className="mb-5 text-center text-white md:text-[20px] max-md:text-[10px]">
        ဖျော်ဖြေမည့်နေ့ : 2 /3 /2024
      </p>

      {/* Ticket Code Field */}
      <div data-aos="zoom-in"
      className="max-md:mb-[50px] md:mb-[100px]">
        <TicketForm />
      </div>
      {/* Image Card */}
      <div data-aos="fade-up" 
      className="mb-[150px] max-container mx-auto max-lg:hidden">
        <ImageCard />
      </div>
      <div className="md:mb-[50px] max-sm:hidden lg:hidden flex justify-center">
        <Image src={imageTablet} />
      </div>
      <div className="max-md:mb-[50px] sm:hidden flex justify-center">
        <Image src={imageMobile} />
      </div>

      <p
        style={myFont.style}
        className="mb-8 text-[#FF8C8C] lg:text-4xl sm:text-[24px] max-sm:text-[16px] text-center"
      >
        “မကြော်ကောက်စတမ်း အခြော်ကောက် အစွမ်း”
      </p>

      {/* Event Date and Time */}
      {/* <div className='w-[409px]'>
        <div className='w-[140px] text-center'>
        <p></p>
        </div>
    </div> */}

      {/* Event Date and Time Table */}

      {/* Container 1 */}
      <div className="hidden max-w-[848px]  justify-center items-center mx-auto ">
        {/* Event Date and Time */}
        <div className="w-full sm:text-[14px] max-sm:text-[12px]">
          <table className="w-full table-auto text-white">
            <tbody>
              <tr>
                <td style={Font2.style} className=" px-4 py-2">
                  ကမ်ပိန်းကာလ
                </td>
                <td className=" px-4 py-2">12 /2 /2024 မှ 29 /2 /2024</td>
              </tr>
              <tr>
                <td style={Font2.style} className=" px-4 py-2">
                  ဖျော်ဖြေမည့်နေ့
                </td>
                <td className=" px-4 py-2">2 /3 /2024</td>
              </tr>
              <tr>
                <td style={Font2.style} className=" px-4 py-2">
                  ဖျော်ဖြေမည့်သူများ
                </td>
                <td className=" px-4 py-2">တော်လှန်LGBTများ အနုပညာရှင်များ</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-[15px] w-auto border border-white"></div>

          <table className=" table-auto text-white">
            <tbody>
              <tr>
                <td className=" px-4 py-2">Organized by</td>
                <td className=" px-4 py-2">Organized by</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">Collaborated by</td>
                <td className=" px-4 py-2">Organized by</td>
              </tr>
            </tbody>
          </table>
        </div>

        
      </div>

      {/* Watch Live Section */}
      <div 
       className="max-container mx-auto">
      <div className="flex w-full md:h-[384px] max-md:h-[300px]  md:justify-between max-md:justify-center  md:items-center md:mb-[100px] max-md:mb-[20px]">
          <div data-aos="fade-right"
          className="w-[30%] max-md:hidden">
            <Image src={pre1} />
          </div>

          <div data-aos="fade-up"
           className="md:w-1/3 max-md:w-full  flex flex-col justify-center items-center">
            <div className="cursor-pointer hover:bg-gray-300  md:mb-[100px] max-md:mb-[50px] md:w-[236px] md:h-[62px] max-md:w-[170px] max-md:h-[44px] bg-white flex justify-center items-center gap-2">
              <div className="w-[12px] h-[12px] rounded-md bg-black"></div>
              <p className="text-[#16002B] text-[17px] font-[700] ">
                Watch Live
              </p>
            </div>
            <div className="flex gap-[35px] max-md:text-[12px]">
              <div
                style={Font2.style}
                className="text-white flex flex-col gap-y-3"
              >
                <p>ကမ်ပိန်းကာလ</p>
                <p>ဖျော်ဖြေမည့်နေ့</p>
                <p>ဖျော်ဖြေမည့်သူများ</p>
              </div>
              <div className="text-white flex flex-col gap-y-3">
                <p>12 /2 /2024 မှ 29 /2 /2024</p>
                <p>2 /3 /2024</p>
                <p>တော်လှန်LGBTများ အနုပညာရှင်များ</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left"
           className="w-[30%] max-md:hidden">
            <Image src={pre2} />
          </div>
        </div>
        </div>

      {/* Video Header */}
      <p className="mt-[150px] mb-[30px] lg:text-[36px] md:text-[30px] sm:text-[24px] max-sm:text-[20px] text-[#FF8C8C] font-[400] text-center">
        SHORT VIDEO ON FACEBOOK
      </p>
      <div data-aos="fade-up"
       className="flex justify-center max-sm:w-[316px] max-sm:mx-auto">
        <div className=" grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-8 ">
          <VideoCard title={"စစ်ရှောင်ရန်ပုံငွေပွဲ"} />
          <VideoCard title={`“အော်ကားလုံးပဲ မော်ကင်ဂလာပါရှင့်”`} />
          <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
          <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
          <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
        </div>
      </div>
    </main>
  );
};

export default Home;
