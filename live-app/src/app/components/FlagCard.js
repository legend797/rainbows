// components/Card.js
import Image from "next/image";


const FlagCard = ({ flag, price }) => {
    return (
      <div className="text-white sm:border-[3px] sm:px-3 sm:py-2 sm:rounded-[14px]  sm:w-[221px] sm:h-[53px] max-sm:w-[120px] max-sm:h-auto max-sm:border-2 max-sm:px-2 max-sm:py-1 max-sm:rounded-[8px] flex justify-around items-center ">
        <Image src={flag} className="sm:w-[40px] sm:h-[25px] max-sm:w-[20px] max-sm:h-[10px]" />
        <p className="sm:text-[24px] max-sm:text-[16px]">{price}</p>
      </div>
    );
  };
  
  export default FlagCard;
  