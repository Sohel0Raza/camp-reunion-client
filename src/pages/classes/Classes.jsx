import { Helmet } from "react-helmet";
import useClass from "../../hooks/useClass";
import ClassCart from "./ClassCart";

const Classes = () => {
  const [classes] = useClass();
  return (
    <>
      <Helmet>
        <title>CampReunion | Classes</title>
      </Helmet>
      <div>
        <h2 className="pt-24 pb-10 text-center font-mono text-white text-3xl bg-gray-700">All Class</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 font-mono">
        {classes.map((cl) => (
          <ClassCart key={cl._id} cl={cl}></ClassCart>
        ))}
      </div>
    </>
  );
};

export default Classes;
