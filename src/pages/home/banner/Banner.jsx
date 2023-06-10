import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Fade, Slide } from "react-awesome-reveal";
import banner1 from "../../../assets/img/banner/banner 1.jpg";
import banner2 from "../../../assets/img/banner/banner 5.jpg";
import banner3 from "../../../assets/img/banner/banner 56.jpg";
import banner4 from "../../../assets/img/banner/banner 66.jpg";
import banner5 from "../../../assets/img/banner/banner 79.jpg";
const Banner = () => {
  return (
    <Carousel className="text-center">
      <div className="relative text-start">
        <img src={banner1} />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]">
          <div className="text-white px-6 md:p-10 md:ml-10 md:mb-5">
            <Slide>
              <h2 className="mt-5 md:mb-3 md:mt-0 md:text-5xl font-bold uppercase">
                <span className="text-lime-500">Summer</span> <br /> Sports Camp
              </h2>
            </Slide>
            <h4 className="md:text-2xl font-semibold">Meet New Friends</h4>
            <Fade delay={1e3} cascade damping={1e-1}>
              <p className="md:text-xl md:font-bold text-lime-500">July 15-25</p>
            </Fade>
            <div className="my-3">
              <button className="btn-outlined "> Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-start">
        <img src={banner3} />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]">
          <div className="text-white px-6 md:p-10 md:ml-10 md:mb-5">
            <Slide>
              <h2 className="mt-5 mb-3 md:mt-0 md:text-5xl font-bold uppercase">
                <span className="text-lime-500">Summer</span> <br /> Badminton
                Camp
              </h2>
            </Slide>
            <Fade  delay={1e3} cascade damping={1e-1}>
            <p className="md:text-xl font-bold text-lime-500 uppercase">
              Classes 7 AM - 8 AM
            </p>
            </Fade>
            <div className="md:my-3">
              <button className="btn-outlined "> Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-start">
        <img src={banner4} />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]">
          <div className="text-white px-6 md:p-10 md:ml-10 md:mb-5">
            <Slide>
            <h2 className="mt-5 mb-3 md:mt-0 md:text-5xl font-bold uppercase">
              <span className="text-lime-500">Summer</span> <br /> Volleyball
              Camp
            </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p className="md:text-xl font-bold text-lime-500 uppercase">
              Classes 10 AM - 11 AM
            </p>
            </Fade>
            <div className="md:my-3">
              <button className="btn-outlined "> Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-start">
        <img src={banner5} />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]">
          <div className="text-white px-6 md:p-10 md:ml-10 md:mb-5">
            <Slide>
            <h2 className="mt-5 mb-3 md:mt-0 md:text-5xl font-bold uppercase">
              <span className="text-lime-500">Summer</span> <br /> Cricket Camp
            </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p className="md:text-xl font-bold text-lime-500 uppercase">
              Classes 2 PM - 4 PM
            </p>
            </Fade>
            <div className="md:my-3">
              <button className="btn-outlined "> Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-start">
        <img src={banner2} />
        <div className="absolute flex items-end left-0 top-0 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 21)]">
          <div className="text-white px-6 md:p-10 md:ml-10 md:mb-5">
            <Slide>
            <h2 className="mt-5 mb-3 md:mt-0 md:text-5xl font-bold uppercase">
              <span className="text-lime-500">Summer</span> <br />
              Soccer Camp
            </h2>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
            <p className="md:text-xl font-bold text-lime-500 uppercase">
              Classes 5 PM - 7 PM
            </p>
            </Fade>
            <div className="md:my-3">
              <button className="btn-outlined "> Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
