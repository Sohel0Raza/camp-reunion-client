import { Helmet } from "react-helmet";
import useClass from "../../hooks/useClass";
import ClassCart from "./ClassCart";
import FadeLoader from "react-spinners/FadeLoader";

const Classes = () => {
  const [classes, loading] = useClass();
  const allClass = classes.filter(cls=> cls.status !== 'pending')
  if(loading){
    return <div className="flex items-center justify-center md:py-28"><FadeLoader color="#36d7b7" /></div>
  }
  return (
    <>
      <Helmet>
        <title>CampReunion | Classes</title>
      </Helmet>
      <div>
        <h2 className="pt-24 pb-10 text-center font-mono text-white text-3xl bg-gray-700">All Class</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 font-mono">
        {allClass.map((cl) => (
          <ClassCart key={cl._id} cl={cl}></ClassCart>
        ))}
      </div>
    </>
  );
};

export default Classes;
