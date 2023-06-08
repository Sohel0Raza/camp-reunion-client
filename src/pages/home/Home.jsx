import Banner from "./banner/Banner";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>CampReunion | Home</title>
            </Helmet>
            <Banner/>
        </div>
    );
};

export default Home;