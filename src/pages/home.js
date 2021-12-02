import '../styles/home.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import BackgroundLogo from "../icons/BackgroundTriangle";


function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="middle">
          <div className="background-logo">
            <BackgroundLogo />
          </div>

          <div className="tagline ff-brandon-bold">Tech Leadership that your startup deserves</div>
          <div className="info ff-brandon">
            Ryaz builds, ships and launches your digital product 
            with gaurantees on quality and performance.
          </div>
        </div>
        <Footer />  
      </div>
    </>
  );
}

export default Home;
