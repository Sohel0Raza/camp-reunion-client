import { Helmet } from "react-helmet";
import useClass from "../../hooks/useClass";
import InstructorCart from "./InstructorCart";

const Instructor = () => {
  const [classes] = useClass();
  return (
    <div>
      <>
        <Helmet>
          <title>CampReunion | Classes</title>
        </Helmet>
        <div>
          <h2 className="pt-24 pb-10 text-center font-mono text-white text-3xl bg-gray-700">
            All Instructor
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 font-mono">
          {classes.map((instructor) => (
            <InstructorCart key={instructor._id} instructor={instructor}></InstructorCart>
          ))}
        </div>
      </>
    </div>
  );
};

export default Instructor;