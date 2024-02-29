'use client';
import { Button, Spinner} from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
const SubmitBtn = ({ }) => {
    const {pending} = useFormStatus();
    return (
      <Button background={"none"} fontWeight={900} type="submit" className="max-md:w-[68px] max-md:h-[30px] max-md:px-[5px] max-md:py-[4px] max-md:text-[8px] max-md:rounded-2xl  hover:bg-[#16002b] hover:text-white text-gray-300 font-semibold py-2 px-4 rounded-[33px]"
      _hover={{background:"none", transform:"scale(1.1)"}}>
          {pending ? <Spinner /> : 'Submit Code'}
  </Button>
    )
}

export default SubmitBtn