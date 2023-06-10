import { Link } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";
import PopularInstructorCart from "./PopularInstructorCart";
import FadeLoader from "react-spinners/FadeLoader";

const PopulerInstructor = () => {
  const [populerInstructor, loading] = useInstructor();
  if(loading){
    return <div className="flex items-center justify-center md:my-20"><FadeLoader color="#36d7b7" /></div>
  }
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
