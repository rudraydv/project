

const Download  = () =>
{
    return(
        <>
        <div className="flex flex-wrap  justify-evenly items-center my-10">
            <div className="">
                <div className='w-80'>
                    <video autoPlay={true} muted ><source src="https://www.devknus.com/projectImage/video/v2.mp4" type="video/mp4"></source></video>
                </div>
            </div>

            {/* right */}

            <div className="text-white text-center md:text-left lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold my-3">Download your Shows <br className=""/> to watch offline</h1> 
            <p className="text-white  text-xl md:text-xl lg:text-xl font-medium mb-5">Save your favourites easily and always have <br className="hidden md:block lg:block"/> something to watch.</p>

            </div>
        </div>
        <div className="hr-line">
            <h1><hr/></h1>
        </div>
        </>
    );
};

export default Download;