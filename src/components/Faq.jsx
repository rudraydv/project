import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaqData } from "../data/Faqdata";
import { IoIosArrowForward } from "react-icons/io";


const Faq = () => {
    const [openIndex, setOpenIndex] = useState();

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    console.log(openIndex)

    return (
        <>
         <h1 className="text-white text-4xl md:text-4xl lg:text-4xl font-bold text-center my-6 ">Frequently Asked Questions</h1>
            {FaqData.map((item, index) => (
                <div  className="">
                    <div
                        onClick={() => handleClick(index)}
                        className="flex justify-between items-center text-center bg-gray-700 text-white mx-5 md:mx-40 lg:mx-40 p-3 text-xl mb-1 cursor-pointer hover:bg-gray-500"
                    >
                        <div className="">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="">
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                    {openIndex === index && (
                        <div className="text-white mx-5 md:mx-40 lg:mx-40 p-3 bg-gray-700 mb-4">
                            <p>{item.desc}</p>
                        </div>
                    )}
                </div>
            ))}

<p className="text-white text-center text-[17px] md:text-[17px] lg:text-[17px] font-normal mb-4 mt-4">Ready to Watch? Enter your email to create or restart your membership</p>

<div className=' flex  justify-center text-center items-center gap-2 mb-4'>
    <input
     className=" bg-black text-white font-medium opacity-65 outline-none px-3 py-2 md:w-80 lg:w-80 w-52 border-[1.5px] rounded-md" type="text" placeholder="Email address" />
    
    <button 
    className=" flex items-center text-white bg-red-600 px-3 py-[6px]  rounded-md">
        <p
     className="text-white font-bold text-xl">Get Started</p><IoIosArrowForward className=" ml-2 text-xl"/></button>
</div>

<div className="hr-line">
    <h1><hr/></h1>
</div>
        </>
    );
};

export default Faq;