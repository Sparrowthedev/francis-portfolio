import './assets/css/style.css';
import './assets/css/fontawesome.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Intro from './react components/Intro';
import Navbar from './react components/Navbar';
import Companies from './react components/Companies';
import Services from './react components/Services';
import Testimonial from './react components/Testimonial';
import Faq from './react components/Faq';
import Portfolio from './react components/Portfolio';
import ContactUs from './react components/ContactUs';
import Footer from './react components/Footer';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Intro/>
     <Companies/>
     <Services/>
     <Testimonial/>
     <Faq/>
     <Portfolio/>
     <ContactUs/>
     <Footer/>
    </div>
  );
}

export default App;
