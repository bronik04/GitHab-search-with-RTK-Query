import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav
            className={'flex justify-between items-center h-[50px] px-5 bg-gray-500 text-white'}>
            <Link to={'/'}>
                <h3 className={'font-bold'}>GitHab search</h3>
            </Link>
            <span className={'flex gap-4'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites</Link>
            </span>
        </nav>
    );
};

export default Navigation;
