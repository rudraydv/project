

const Enjoy = () =>
{
    return(
        <>
        <div className="flex flex-wrap justify-evenly items-center md:py-16 lg:py-16 md:text-center lg:text-center text-center">
            <div className="">
                {/* left */}
                <div className="text-white">
                    <h1 className="text-4xl font-bold my-3">Enjoy on your TV</h1>
                    <p className="text-xl md:mb-8 lg:mb-8 my-6">Watch on smart TVs PlayStation Xbox, <br/> CromeCast,Apple TV,Blu-ray Players and More</p>
                </div>
            </div>

              {/* right */}
            <div className="">
                <video className="md:w-[27em] lg:w-[27em] w-80 my-4" autoPlay={true} muted>
                    <source src="https://www.devknus.com/projectImage/video/v1.mp4" type="video/mp4">
                        </source>
                        </video>
            </div>
        </div>
        <div className="hr-line">
            <h1><hr/></h1>
        </div>
        </>
    );
};

export default Enjoy;