import { Link } from "react-router-dom";
import usePopularClass from "../../../hooks/usePopularClass";
import PopularClassCart from "./PopularClassCart";

const PopularClasses = () => {
  const [popularClass] = usePopularClass();
  return (
    <div className="mb-10">
      <h3 className="text-4xl text-center my-10 uppercase">Popular Class</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-0">
        {popularClass.map((popularCl) => (
          <PopularClassCart 
          key={popularCl._id}
          popularCl={popularCl}
          >  
          </PopularClassCart>
        ))}
      </div>
       <div className="text-center p-5 md:my-5">
       <Link to="/classes"><button className="btn-info">See All Class</button></Link>
       </div>
    </div>
  );
};

export default PopularClasses;
