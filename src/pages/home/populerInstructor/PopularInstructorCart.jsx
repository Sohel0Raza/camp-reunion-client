import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularInstructorCart = ({ instructor }) => {
  const { instructor_name, instructor_image, class_name } = instructor;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="card hover:bg-slate-100 hover:font-mono hover:text-green-700">
      <div
        className=" px-10 pt-10 mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <img
          src={instructor_image}
          alt="instructor"
          className="h-52 w-52 rounded-full"
        />
      </div>
      <div
        className="card-body items-center text-center "
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="card-title">{instructor_name}</h2>
        <p>{class_name}</p>
      </div>
    </div>
  );
};

export default PopularInstructorCart;
