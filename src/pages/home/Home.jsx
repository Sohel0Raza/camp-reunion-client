import Banner from "./banner/Banner";
import {Helmet} from "react-helmet";
import PopularClasses from "./popularClasses/PopularClasses";
import PopulerInstructor from "./populerInstructor/PopulerInstructor";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CampReunion | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopulerInstructor/>
        </div>
    );
};

export default Home;