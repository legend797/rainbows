import React from "react";
import localFont from "next/font/local";

import Image from "next/image";
import Link from "next/link";

import banner from "../assets/Group.svg";
import banner2 from '../assets/Slogan1.svg';
import logo from "../assets/Rectangle.svg";
import logo2 from '../assets/logo2.svg';

import pre1 from "../assets/live-preview1.png";
import pre2 from "../assets/live-preview2.png";
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';
import C3 from '../assets/C3.png';
import C4 from '../assets/C4.png';
import C5 from '../assets/C5.png';
import C6 from '../assets/C6.png';
import C7 from '../assets/C7.jpg';
import C8 from '../assets/C8.png';

import imageTablet from "../assets/image-tablet.png";
import imageMobile from "../assets/image-mobile.png";

import TicketForm from "./TicketForm";
import ImageCard from "./ImageCard";
import Collab from "../components/Collab";

import VideoCard from "../components/VideoCard";
import SwiperImage from "./SwiperImage";

const myFont = localFont({ src: "../fonts/Khyay-Regular.ttf" });
const Font2 = localFont({ src: "../fonts/MMTaunggyi.ttf" });

const Home = () => {
  return (
    <main className="bg-[#d0c8e3]  mx-auto h-auto">
      <div className="  max-container mx-auto h-auto ">
        <div className="max-container h-[0px]">
       <Image src={banner} className="w-full h-auto"/>
       </div>
        <div className=" w-full h-auto flex flex-col items-center justify-center ">
          <div className="">
          {/* <Image src={logo} className="md:hidden max-sm:w-[200px] sm:w-[300px] md:w-[400px] absolute max-sm:top-0" />
          <Image src={logo} className="absolute lg:top-[100px] md:top-[0px] max-md:hidden w-[600px] h-auto " /> */}
          <Image src={logo} className="lg:mt-[150px] md:mt-[100px] sm:mt-[80px] max-sm:mt-[30px] lg:w-[500px]  max-sm:w-[150px] sm:w-[250px] md:w-[400px] mb-[50px]" />
          </div>

          <div className="">
          <p className=" md:mb-[30px] max-sm:mb-[10px] max-sm:mt-[5px] text-center text-white md:text-[20px] max-md:text-[10px]">
            ဖျော်ဖြေမည့်နေ့ : 2 /3 /2024
          </p>

          {/* Ticket Code Field */}
          <div  className="z-10 max-md:mb-[50px] md:mb-[100px]">
            <TicketForm />
          </div>

          </div>
        </div>

        

        <div className="">
        <div data-aos="fade-up" className="mb-[50px] flex justify-center items-center max-md:text-[12px] gap-[35px]">
                <div
                  style={Font2.style}
                  className="text-[#3A0072] text-justify font-[700] flex flex-col gap-y-[18px]"
                >
                  <p>ကမ်ပိန်းကာလ</p>
                  <p>ဖျော်ဖြေမည့်အချိန်</p>
                  <p>ဖျော်ဖြေမည့်သူများ</p>
                </div>
                <div className="text-[#3A0072] text-justify font-[600] flex flex-col gap-y-3">
                  <p>12 /2 /2024 မှ 1 /3 /2024</p>
                  <p>2 /3 /2024  (၅း၃၀ မြန်မာစံတော်ချိန်)</p>
                  <p>တော်လှန် LGBTIQ+ များ အနုပညာရှင်များ</p>
                </div>
              </div>
              </div>

        {/* <div className="max-md:w-[271px] text-center mx-auto">
          <p
            style={myFont.style}
            className=" mb-8  md:text-4xl text-[#3A0072] max-md:text-[24px] max-md:w-[271px] text-center stroke"
          >
            “မကြော်ကောက်စတမ်း အခြော်ကောက် အစွမ်း”
          </p>
        </div> */}

        {/* Image Card */}
        <div className="hidden">
          <div
            data-aos="fade-up"
            className=" mb-[150px]  mx-auto max-lg:hidden"
          >
            <ImageCard />
          </div>
          <div className="md:mb-[50px] max-sm:hidden lg:hidden flex justify-center">
            <Image src={imageTablet} />
          </div>
          <div className="max-md:mb-[50px] sm:hidden flex justify-center">
            {/* <Image src={imageMobile} /> */}
            <SwiperImage />
          </div>
        </div>
        {/* <p
          style={myFont.style}
          className="stroke1 mb-8 text-[#FF8C8C] lg:text-[48px] sm:text-[24px] max-sm:text-[16px] text-center"
        >
          “မကြော်ကောက်စတမ်း အခြော်ကောက် အစွမ်း”
        </p> */}

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
                  <td className=" px-4 py-2">
                    တော်လှန်LGBTများ အနုပညာရှင်များ
                  </td>
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
        <div className="hidden max-container mx-auto h-auto mt-[80px]">
          <div className="flex w-full md:h-auto max-md:h-auto  md:justify-between max-md:justify-center  md:items-center md:mb-[100px] max-md:mb-[20px]">
            <div data-aos="zoom-in-right" className="w-[24%] max-lg:hidden">
              <Image src={pre1} />
            </div>

            <div
              data-aos="fade-up"
              className="lg:w-[50%] max-lg:w-full max-sm:px-2 sm:px-[20px]  h-auto flex flex-col justify-center items-center"
            >
              {/* <div className="cursor-pointer hover:bg-gray-300  md:mb-[100px] max-md:mb-[50px] md:w-[236px] md:h-[62px] max-md:w-[170px] max-md:h-[44px] bg-white flex justify-center items-center gap-2"></div> */}
              {/* <div className="w-[12px] h-[12px] rounded-md bg-black"></div> */}
              <div className="mb-[50px] text-center   ">
                <p className="text-[#3A0072] text-[13px] max-lg:w-full  max-lg:h-auto lg:w-[850px] lg:h-[152px] ">
                  သက်တံများ ရဲ့ ပွဲအကြောင်းလေး ကိုစိတ်ဝင်စားတဲ့ ချစ်ရသော
                  ပြည်သူများကို အကြောင်းအရာလေးတွေမျှဝေပေးချင်ပါတယ်။ ပါဝင်သော
                  ပွဲအစီအစဉ်များ- 🌈 ရသစုံ အနုပညာ ဖျော်ဖြေမှု ( တော်လှန်LGBTIQ+
                  ရဲဘော်များရဲ့ အကအလှများ ၊ စတိတ်ရှိုးအစီအစဉ်များ ၊ CDM များရဲ့
                  တန်ဖိုးထားဖန်တီးထားတဲ့ Eco printing fashion show၊
                  ပြည်သူချစ်အနုပညာရှင်များရဲ့ ဖျော်ဖြေတင်ဆက်မှုများ ၊
                  တေ-ာ်လှန်ရေးထဲမှ ပေါက်ဖွားလာတဲ့ သမိုင်းဝင် ပြဇာတ်များ နှင့်
                  အခြားအခြားသော အနုပညာ တင်ဆက်မှာများ ) ပါဝင်ပါတယ်။ 🌈 ၄င်း
                  တင်ဆက်မှုများကို March လ ၂ ရက်နေ့မှာ အွန်လိုင်းက ဝယ်ယူထားတဲ့
                  လက်မှတ်များဖြင့် နိုင်ငံအနှံ့တွင် တချိန်တည်းမှာ website
                  မှတဆင့် ဝင်ရောက်ကြည့်ရှုနိုင်မှာဖြစ်ပါတယ် ။ 🌈
                  လက်မှတ်ဝယ်ယူခြင်းဖြင့် ဓမ္မဘက်တော်သား ပြည်သူတွေက ခဏတာ
                  အပန်းဖြေရင်း အွန်လိုင်းကနေ တင်ဆက်မှုတွေကို အိုးမကွာအိမ်မကွာ
                  ကြည့်ရှု အားပေးရမယ် ။ ထိုလက်မှတ်ရောင်းအားများမှ ငွေကြေးတွေဟာလဲ
                  ပြည်သူ့အင်အားအဖြစ် အမှန်တကယ်လိုအပ်နေသော
                  စစ်ရေ-ာင်မိဘပြည်သူတွေနဲ့ သူရဲကောင်းတွေဆီ
                  တိုက်ရိုက်စီးဆင်းမှာဖြစ်ပါတယ် ။
                </p>
              </div>

              
            </div>

            <div data-aos="zoom-in-left" className="w-[24%] max-lg:hidden">
              <Image src={pre2} />
            </div>
          </div>
        </div>

{/* Banner2 */}
        <div className="flex flex-col justify-center items-center mb-[50px]">
          <div ><Image src={banner2} className="w-full h-auto" /></div>
        
        </div>

        {/* Collabator */}
        <div className="flex justify-center ">
        <div data-aos="zoom-in" className="grid max-sm:gap-5 sm:gap-10 justify-center max-sm:grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 max-sm:mt-4 mb-[80px]">
          <Collab  src={C1} />
          <Collab src={C2} />
          <Collab src={C3} />
          <Collab src={C4} />
          <Collab src={C5} />
          <Collab src={C6} />
          <Collab src={C7} />
          <Collab src={C8} />
        </div>
        </div>
        <div className="w-full h-[70px] bg-[#FF3837] flex justify-center items-center">
          <p style={myFont.style} className="text-white font-[400]">Powered by <Link target="_blank" href='https://www.facebook.com/profile.php?id=61556230526611&mibextid=ZbWKwL
'><Image src={logo2} className="w-auto h-[20px] inline-block " /></Link></p>
          
        </div>
        
        {/* Video Header */}
        <div className="hidden">
          <p className="mt-[150px] mb-[30px] lg:text-[36px] md:text-[30px] sm:text-[24px] max-sm:text-[20px] text-[#FF8C8C] font-[400] text-center">
            SHORT VIDEO ON FACEBOOK
          </p>
          <div
            data-aos="fade-up"
            className="flex justify-center max-sm:w-[316px] max-sm:mx-auto"
          >
            <div className=" grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-8 ">
              <VideoCard title={"စစ်ရှောင်ရန်ပုံငွေပွဲ"} />
              <VideoCard title={`“အော်ကားလုံးပဲ မော်ကင်ဂလာပါရှင့်”`} />
              <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
              <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
              <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
