// import React from 'react';
import { Link } from 'react-router-dom';
import cslogo from '../../assets/cslogo.svg'
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className=''>
        <img src={cslogo} alt="" />
        <p>BookMyCampus<br />Follow us on</p>
        <div className='flex gap-4 items-center'>
         <Link> <FaFacebook></FaFacebook></Link>
          <p>facebook</p>
       <Link>   <FaTwitter></FaTwitter></Link>
          <p>Twitter</p>
        </div>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover"><p>mail: test@test.com</p></a>
        <a className="link link-hover"><p>tel: 97270168</p></a>
        <a className="link link-hover"><p>Adress: stk,ctg,bangladesh</p></a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;