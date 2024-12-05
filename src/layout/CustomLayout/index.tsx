import { FC } from 'react';
import { Outlet } from 'react-router';
import NavBar from './NavBar';

const CustomLayout:FC = () => {

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default CustomLayout;