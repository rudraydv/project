import { Link } from "react-router-dom";


const Navbar = () =>
{
    return(
        <>
        <div className="">
            <div className='flex md:justify-around lg:justify-around justify-between items-center pt-3'>

                {/* left */}

                <div className="md:w-32 lg:w-32 w-24 ml-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
                </div>

                {/* right */}

               <div className="flex items-center gap-3">
               <div className=" bg-[#111112] text-white  px-5 py-1 mr-5 lg:mr-0 md:mr-0 border-[1px]  border-gray-200 rounded-md hover:ring-2 hover:ring-gray-200 opacity-60">
                    <select className="bg-transparent outline-none">
                        <option className="bg-red-500" value="english">English</option>
                        <option  className='bg-blue-500' value="hindi">Hindi</option>
                    </select>

                </div>
                <Link to={'/signin'}>
                <button className="bg-red-600 hover:bg-red-700 text-white md:px-5 lg:py-1 mr-8 md:mr-0 lg:mr-0 px-5 py-1 rounded-md">Sign In</button>
                </Link>
               </div>

            </div>
        </div>
        </>
    );
};

export default Navbar;