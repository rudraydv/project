import Navbar from "./Navbar";
import { IoIosArrowForward } from "react-icons/io";



const HeroSection = () =>
{

   
    return(
        <>
        <div 
          className=' h-[34em] md:h-[40em] lg:h-[40em]'
         style={{
                    background: "linear-gradient(80deg, black, transparent), url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)"
                }}>
        <Navbar/>

        {/* HeroSection */}

        <div className=" container  mx-auto flex justify-center items-center h-96">
            <div className="">
            <h1 className="text-white text-center text-3xl md:text-5xl lg:text-5xl lg:px-20 px-5 font-bold mb-6">The biggest Indian hits. The best Indian stories. All streaming here.</h1>
            <p className="text-white text-center  text-xl md:text-xl lg:text-xl font-medium mb-5">Watch Anywhere. Cancel Anytime.</p>
            <p className="text-white text-center text-[17px] md:text-[17px] lg:text-[17px] font-normal mb-4">Ready to Watch? Enter your email to create or restart your membership</p>

            <div className=' flex  justify-center text-center items-center gap-2'>
                <input
                 className=" bg-black text-white font-medium opacity-65 outline-none px-3 py-2 md:w-80 lg:w-80 w-52 border-[1.5px] rounded-md" type="text" placeholder="Email address" />
                
                <button 
                className=" flex items-center text-white bg-red-600 px-3 py-[6px]  rounded-md">
                    <p
                 className="text-white font-bold text-xl">Get Started</p><IoIosArrowForward className=" ml-2 text-xl"/></button>
            </div>
            </div>
      </div>
   </div>
   <div className='hr-line'><hr/></div>
        
        </>
    );
};

export default HeroSection;