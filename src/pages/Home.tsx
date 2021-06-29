import React from 'react';
import Footer from '../components/Footer';
import BusinessAndIndividual from '../components/home/BusinessAndIndividual';

import Header from '../components/home/Header';
import SolutionForBusiness from '../components/home/SolutionForBusiness';
import SolutionForConsumer from '../components/home/SolutionForConsumers';


const Home = () => {
    return(
        <div className="w-full">
          <Header/>
          <SolutionForConsumer />
          <SolutionForBusiness />
          <BusinessAndIndividual/>
          <Footer />
        </div>
    )
}

export default Home