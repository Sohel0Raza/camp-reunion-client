import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/img/login/network-404-error-p.avif';
const ErrorPage = () => {
  const { error, statusText} = useRouteError();
  return (
      <div className="flex flex-col items-center mt-20 lg:mt-40"> 
       <img className="h-64" src={errorImg} alt="" />
        <h2 className="text-2xl font-bold">{statusText}</h2>
        <p>Error:{error.message}</p>
        <Link to="/"><button className="btn-primary mt-5">Back to Homepage</button></Link>
      </div>
  );
};

export default ErrorPage;