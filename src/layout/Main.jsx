import { Outlet, useLocation } from 'react-router-dom';
import Navber from '../pages/shared/navber/Navber';
import Footer from '../pages/shared/footer/Footer';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div className='md:w-10/12 mx-auto'>
           {noHeaderFooter || <Navber/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;