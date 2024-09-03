import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/404.gif'


const ErrorPage = () => {
    return (
        <div>
            <div className='bg-orange-500 overflow-auto'>
                <h1 className='bg-red-600 text-white m-5 rounded-md text-xl p-5 text-center font-bold'>Invalid Link</h1>
                <img className='w-full' src={ErrorImage} alt="" />
                <Link to={'/'}> <button className='btn btn-warning text-white m-5 w-4/12 block mx-auto'>Go to Home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;