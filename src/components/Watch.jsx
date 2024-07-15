
const Watch = () =>
{
    return(
        <>
        <div className="flex flex-wrap justify-evenly items-center my-10">
            <div className="">
                {/* left */}
                <div className="text-white text-center md:text-left lg:text-left">
                    <h1 className="text-4xl font-bold my-3 ">Watch Everywhere</h1>
                    <p className="text-xl md:mb-8 lg:mb-8 my-2">
                    Stream unlimited movies and TV shows on your <br className="hidden md:block lg:block"/> phone, tablet, laptop, and TV.</p>                </div>
            </div>

              {/* right */}
            <div className="">
                <video className="md:w-[27em] lg:w-[27em] w-80 my-4" autoPlay={true} muted>
                    <source src="https://www.devknus.com/projectImage/video/v3.mp4" type="video/mp4">
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

export default Watch;