import localFont from "next/font/local";

import Image from "next/image";

// Flag and Price
import FlagCard from "../components/FlagCard";
import aud from "../assets/australia.png";
import eur from "../assets/europe.png";
import jpy from "../assets/japan.jpg";
import mmk from "../assets/myanmar.png";
import sgd from "../assets/singapore.png";
import krw from "../assets/south-korea.jpg";
import thb from "../assets/thailand.jpg";
import gbp from "../assets/uk.png";
import usd from "../assets/usa.jpg";

import p3 from "../assets/photo3.jpg";

// Video
import ImageCard from "../home/ImageCard";
import VideoCard from "../components/VideoCard";

import logo from "../assets/logo.png";
import logoMobile from '../assets/logo-mobile.png';
import pre1 from "../assets/live-preview1.png";
import pre2 from "../assets/live-preview2.png";

const myFont = localFont({ src: "../fonts/Khyay-Regular.ttf" });
const Font2 = localFont({ src: "../fonts/MMTaunggyi.ttf" });

const Live = () => {
  return (
    <div className="bg-[#16002b]">
      {/* Live Container */}
      <div className="max-container mx-auto h-auto">
        {/* Logo */}
        <div className="pt-[75px] flex justify-center">
          <Image src={logoMobile} className="md:hidden"/>
          <Image src={logo} className="max-md:hidden"/>
        </div>

        {/* Title */}
        <div className="max-w-[846px] mx-auto mb-[30px] text-center">
        <div className="max-md:w-[271px] text-center mx-auto">
      <p
        style={myFont.style}
        className="mb-8 text-[#FF8C8C] md:text-4xl max-md:text-[24px] max-md:w-[271px] text-center"
      >
        “မကြော်ကောက်စတမ်း အခြော်ကောက် အစွမ်း”
      </p>
      </div>
        <div className="md:text-[20px] max-md:text-[18px] max-sm:text-[14px] max-sm:w-[370px] mx-auto">
          <p className="text-white ">
            တေးသရုပ်ဖော်များ၊ ယိမ်းအကများ မြန်မာအသံ ခေတ်ပေါ်တေးသီချင်း၊ ပြဇာတ်၊
            eco- printing fashion အပြင် တစ်ခြားသော
            ဖျော်ဖြေတင်ဆက်မှုများစွာပါဝင်မည်ဖြစ်ပါသည်။
          </p>
          </div>
        </div>

        {/* Watch Live Section */}
        <div className="flex w-full md:h-[384px] max-md:h-[300px]  md:justify-between max-md:justify-center  md:items-center md:mb-[100px] max-md:mb-[20px]">
          <div className="w-[30%] max-md:hidden">
            <Image src={pre1} />
          </div>

          <div className="md:w-1/3 max-md:w-full  flex flex-col justify-center items-center">
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

          <div className="w-[30%] max-md:hidden">
            <Image src={pre2} />
          </div>
        </div>

        {/* Ticket Section */}
        {/* Large Screen Size */}
        <div className="mb-[50px] grid lg:grid-rows-2 max-lg:hidden gap-y-7 justify-center justify-items-center">
          {/* First column */}
          <div className="col-span-1 grid lg:grid-cols-5  gap-7">
            <FlagCard flag={aud} price="100 AUD" />
            <FlagCard flag={eur} price="100 EUR" />
            <FlagCard flag={jpy} price="100 JPY" />
            <FlagCard flag={mmk} price="100 MMK" />
            <FlagCard flag={sgd} price="100 SGD" />
          </div>
          {/* Second column */}
          <div className="col-span-1 grid lg:grid-cols-4  gap-7">
            <FlagCard flag={krw} price="100 KRW" />
            <FlagCard flag={thb} price="100 THB" />
            <FlagCard flag={gbp} price="100 GBP" />
            <FlagCard flag={usd} price="100 USD" />
          </div>
        </div>

        {/* Small Screen Size */}
        <div className="mb-[50px] col-span-1 lg:hidden  max-lg:grid-cols-3 grid max-lg:grid-rows-3  max-lg:gap-y-[30px] max-sm:gap-y-5 justify-center justify-items-center">
        
          
            <FlagCard flag={aud} price="100 AUD" />
            <FlagCard flag={eur} price="100 EUR" />
            <FlagCard flag={jpy} price="100 JPY" />
            <FlagCard flag={mmk} price="100 MMK" />
            <FlagCard flag={sgd} price="100 SGD" />
          
          
            <FlagCard flag={krw} price="100 KRW" />
            <FlagCard flag={thb} price="100 THB" />
            <FlagCard flag={gbp} price="100 GBP" />
            <FlagCard flag={usd} price="100 USD" />
          
        </div>

        <p className="text-white md:text-[20px] max-md:text-[18px] max-sm:text-[14px] max-sm:w-[370px] mx-auto text-center mb-[150px]">
          လက်မှတ်တစ်စောင်လျှင် 10 usd နှင့်ညီမျှသော
          နိုင်ငံတကာငွေကြေးဖြင့်ဝယ်ယူနိုင်ပါသည်။
        </p>
        {/* Video and Text 1*/}
        <div className="max-container mb-[40px] sm:px-[40px] max-sm:px-[15px]  flex justify-between items-center max-lg:flex-col max-lg:gap-y-[20px]">
          <div>
            <Image src={p3} className="w-[423px] h-[263px]" />
          </div>
          <div className="md:text-[20px] max-md:text-[18px] max-sm:text-[14px] max-sm:w-[370px] mx-auto">
          <p className="text-white ">
            တေးသရုပ်ဖော်များ၊ ယိမ်းအကများ မြန်မာအသံ ခေတ်ပေါ်တေးသီချင်း၊ ပြဇာတ်၊
            eco- printing fashion အပြင် တစ်ခြားသော
            ဖျော်ဖြေတင်ဆက်မှုများစွာပါဝင်မည်ဖြစ်ပါသည်။
          </p>
          </div>
        </div>

         {/* Video and Text 2*/}
         <div className="max-container max-lg:hidden mb-[40px] px-[40px]  flex justify-between items-center">
         <div className="text-white md:text-[20px] md:w-[650px] max-sm:w-[370px] max-sm:h-auto max-sm:text-[16px] max-sm:mx-auto">
         
            <p>
              တေးသရုပ်ဖော်များ၊ ယိမ်းအကများ မြန်မာအသံ ခေတ်ပေါ်တေးသီချင်း၊
              ပြဇာတ်၊ eco- printing fashion အပြင် တစ်ခြားသော
              ဖျော်ဖြေတင်ဆက်မှုများစွာပါဝင်မည်ဖြစ်ပါသည်။
            </p>
            
          </div>
          
          <div>
            <Image src={p3} className="w-[423px] h-[263px]" />
          </div>
          
        </div>

         {/* Video and Text 3*/}
         <div className="max-container max-lg:hidden mb-[40px] px-[40px]  flex justify-between items-center">
          <div>
            <Image src={p3} className="w-[423px] h-[263px]" />
          </div>
          <div className="text-white text-[20px] w-[650px] ">
            <p>
              တေးသရုပ်ဖော်များ၊ ယိမ်းအကများ မြန်မာအသံ ခေတ်ပေါ်တေးသီချင်း၊
              ပြဇာတ်၊ eco- printing fashion အပြင် တစ်ခြားသော
              ဖျော်ဖြေတင်ဆက်မှုများစွာပါဝင်မည်ဖြစ်ပါသည်။
            </p>
            
          </div>
        </div>

        {/*Short Video Header */}
        {/* <p className="mt-[150px] mb-[30px] text-[36px] text-[#FF8C8C] font-[400] text-center">
          SHORT VIDEO ON FACEBOOK
        </p>
        <div className="flex justify-center">
          <div className=" grid lg:grid-cols-3 gap-x-5 gap-y-8">
            <VideoCard title={"စစ်ရှောင်ရန်ပုံငွေပွဲ"} />
            <VideoCard title={`“အော်ကားလုံးပဲ မော်ကင်ဂလာပါရှင့်”`} />
            <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
            <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
            <VideoCard title={"“မုန်တိုင်းကြားက သက်တံများ” ဆိုတာ ဘာလဲ??.."} />
          </div>
        </div> */}

        {/* Video Header */}
      <p className="mt-[150px] mb-[30px] lg:text-[36px] md:text-[30px] sm:text-[24px] max-sm:text-[20px] text-[#FF8C8C] font-[400] text-center">
        SHORT VIDEO ON FACEBOOK
      </p>
      <div className="flex justify-center max-sm:w-[316px] max-sm:mx-auto">
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
  );
};

export default Live;
