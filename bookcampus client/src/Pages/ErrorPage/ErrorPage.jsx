// import React from 'react';

import { Link } from "react-router-dom";
import erroImg from '../../assets/errorPage/error.jpg'
const ErrorPage = () => {
    return (
        <div>
            <Link to='/'><button className=" btn btn-outline">Back To Homepage</button></Link>
            <img src={erroImg} alt="" />

        </div>
    );
};

export default ErrorPage;