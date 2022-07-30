import React from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../../Shared/Header/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
           <PageTitle title="Home" />
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;