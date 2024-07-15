import CreateProfiles from "../components/CreateProfiles";
import Download from "../components/Download";
import Enjoy from "../components/Enjoy";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Watch from "../components/Watch";

const Home = () =>
{
    return(
        <>
        <HeroSection/>
        <Enjoy/>
        <Download/>
        <Watch/>
        <CreateProfiles/>
        <Faq/>
        <Footer/>

        </>
    );
};

export default Home;