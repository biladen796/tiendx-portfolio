import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I&apos;m
                    <img src={LogoTitle} alt='developer' />
                o Xuan Tien
                    <br />
                mobile developer
                </h1>
                <h2>Mobile Developer / JavaScript / Swift / Java Android</h2>
                <Link to={'/contact'} className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;