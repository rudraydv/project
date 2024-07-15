

const Footer = () =>
{
    return(
        <>
        <div className="text-gray-300 pt-20 px-4">
            <h1 className="mb-5 md:ml-10 lg:ml-10">Qusetions? Call <span className="underline">000-800-919-1694</span></h1>

            <div className="flex justify-around underline text-[14px] cursor-pointer">
                <div className="1">
                    <ul className="">
                        <li className="mb-3">FAQ</li>
                        <li className="mb-3">Investor Relations</li>
                        <li  className="mb-3">Privacy</li>
                        <li  className="mb-3">Speed Test</li>
                    </ul>
                </div>

                <div className="2">
                    <ul>
                        <li  className="mb-3">Help Center</li>
                        <li  className="mb-3">Jobs</li>
                        <li  className="mb-3">Cookies Preference</li>
                        <li  className="mb-3">Legal Notices</li>
                    </ul>
                </div>

                <div className="3">
                    <ul>
                        <li  className="mb-3">Account</li>
                        <li  className="mb-3">Ways to Watch</li>
                        <li  className="mb-3">Corporate Information</li>
                        <li  className="mb-3">Only on Netflix</li>
                    </ul>
                </div>

                <div className="">
                    <ul>
                        <li  className="mb-3">Media Center</li>
                        <li  className="mb-3">Terms of Use</li>
                        <li  className="mb-3">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=" bg-[#111112] text-white text-sm md:px-3 lg:px-3 px-3  md:ml-28 lg:ml-28 ml-10 mb-7 py-1 border-[1px]  border-gray-200 rounded-md hover:ring-2 hover:ring-gray-200 opacity-60 w-24">
                    <select className="bg-transparent outline-none">
                        <option className="bg-red-500" value="english">English</option>
                        <option  className='bg-blue-500' value="hindi">Hindi</option>
                    </select>
                    </div>
        </>
    );
};

export default Footer;