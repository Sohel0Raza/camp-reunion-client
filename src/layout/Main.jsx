import { Outlet } from 'react-router-dom';
import Navber from '../pages/shared/navber/Navber';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;