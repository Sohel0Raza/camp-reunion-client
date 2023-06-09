import Banner from "./banner/Banner";
import {Helmet} from "react-helmet";
import PopularClasses from "./popularClasses/PopularClasses";
import PopulerInstructor from "./populerInstructor/PopulerInstructor";
import ContactUs from "./contactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CampReunion | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopulerInstructor/>
            <ContactUs/>
        </div>
    );
};

export default Home;