import Banner from "./banner/Banner";
import {Helmet} from "react-helmet";
import PopularClasses from "./popularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CampReunion | Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;