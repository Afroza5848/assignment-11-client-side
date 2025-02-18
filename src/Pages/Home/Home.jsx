import { Helmet } from "react-helmet-async";
import AuthReview from "../../Components/AuthReview/AuthReview";
import Banner from "../../Components/Banner/Banner";
import FeatureSec from "../../Components/Feature/FeatureSec";
import Map from "../../Components/Map/Map";
import Newsletter from "../../Components/NewsLetter/Newsletter";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>StaySpot | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeatureSec></FeatureSec>
            <Newsletter></Newsletter>
            <AuthReview></AuthReview>
            <Map></Map>
        </div>
    );
};

export default Home;