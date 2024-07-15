import {Link} from 'react-router-dom';
const Signin = () =>
{
    return(
        <>
        <div style={{background:'url(https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg)'}} 
         className='h-[35em] md:h-[40em] lg:h-[40em]'>

            <div className="flex justify-center  items-center">
                <div className='bg-black text-white bg-opacity-70 p-14 rounded mt-10'>
                    <div className="">
                        <h2 className="text-2xl py-5 font-bold mb-4">Sign In</h2>

                        <div className="mb-7">
                    <input className=" w-60 px-4 py-2 rounded-md outline-none bg-[#333333] text-white text-sm" type="email" placeholder="Email or Phone number"/>
                    </div>

                    <div className="mb-5">
                    <input className=" w-60 px-4 py-2 rounded-md outline-none bg-[#333333] text-white text-sm" type="password" placeholder="Password" />
                    </div>

                    <div className="flex w-60 justify-center bg-red-600 p-2 text-sm rounded-md hover:bg-red-700 mb-2">
                        <button className="">Sign In</button>
                    </div>

                    <div className="">
                        <div className="flex text-xs text-gray-400 mb-7">
                            <input type="checkbox"/>
                            <label className="ml-1 mr-24">Remember</label>
                            <p>Need Help?</p>
                        </div>
                        <div className="text-sm">
                            <span className=" font-light text-gray-400">New to Netflix?</span>
                            <Link to={'/'}>
                            <span className='cursor-pointer hover:underline font-light'>Sign up now.</span>
                            </Link>
                        </div>
                        <p className="mt-5 text-[12px] text-gray-400">This page is protected by Google reCAPTCHA to <br/> ensure you're not a bot.<span className="text-blue-600">Learn more.</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Signin;