import '../styles/styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';


function Home() {
  return (
    <>
      <div class="container">
        <Header />
        <div class="middle">
          <div class="logo logo1">
            <div class="left"></div><div class="right"></div>
          </div>
          <div class="logo logo2">
            <div class="left"></div><div class="right"></div>
          </div>
          <div class="logo logo3">
            <div class="left"></div><div class="right"></div>
          </div>

          <div class="tagline ff-brandon">Tech Leadership that your startup deserves</div>
          <div class="info ff-brandon-light">
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
