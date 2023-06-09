import { Link } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";
import PopularInstructorCart from "./PopularInstructorCart";

const PopulerInstructor = () => {
  const [populerInstructor] = useInstructor();
  return (
    <div>
      <h3 className="text-4xl text-center my-10 uppercase">
        Popular Instructor
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {
            populerInstructor.map(instructor => <PopularInstructorCart 
                key={instructor._id}
                instructor={instructor}
            ></PopularInstructorCart>)
        }
      </div>
      <div className="text-center p-5 md:my-5">
       <Link to="/instructor"><button className="btn-info">See All Instructor</button></Link>
       </div>
    </div>
  );
};

export default PopulerInstructor;
