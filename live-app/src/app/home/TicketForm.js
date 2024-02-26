'use client'
import React, { useState } from 'react';

const TicketForm = ({ onSubmit }) => {
  const [ticketCode, setTicketCode] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    // Allow only numbers in the input field
    const onlyNumbers = value.replace(/[^0-9]/g, '');
    setTicketCode(onlyNumbers);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ticketCode);
    
   
    
  };

  return (
    <form onSubmit={handleSubmit} className=" flex justify-center items-center ">
        <div className='bg-[#321f45] px-3 py-2 rounded-[33px] max-md:w-[300px] max-md:h-[40px] max-md:py-1 '>
      <input
        type="text"
        value={ticketCode}
        onChange={handleChange}
        placeholder="#####################"
        className="max-md:w-[199px] max-md:h-[30px]  text-white bg-transparent px-9 border border-gray-500 rounded-[33px] py-2 mr-2 focus:border-white focus:outline-none "
      />
      <button type="submit" className="max-md:w-[68px] max-md:h-[30px] max-md:px-[5px] max-md:py-[4px] max-md:text-[8px] max-md:rounded-2xl  hover:bg-[#16002b] hover:text-white text-gray-300 font-semibold py-2 px-4 rounded-[33px]">
        Submit Code
      </button>
      </div>
    </form>
  );
};

export default TicketForm;
