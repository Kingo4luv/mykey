import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../components/Footer';
import BusinessAndIndividual from '../components/home/BusinessAndIndividual';
import Header from '../components/home/Header';
import SolutionForBusiness from '../components/home/SolutionForBusiness';
import SolutionForConsumer from '../components/home/SolutionForConsumers';
import Testimony from '../components/home/Testimony';
import BlogPost from '../components/home/BlogPost';


const Home = () => {
    return(
        <div className="w-full">
          <Header/>
          <SolutionForConsumer />
          <SolutionForBusiness />
          <Testimony />
          <BlogPost />
          <BusinessAndIndividual/>
          <Footer />
        </div>
    )
}

export default Home