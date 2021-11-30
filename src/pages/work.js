
import '../styles/styles.scss';
import '../styles/work.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import WorkFrame from '../components/workFrame';

function Work() {
  return (
    <>
      <div className="container" >
        <Header />
        <div class="work-container">
        <div class="work-tagline ff-brandon-light">We design, build and ship digital products on time with
          written guarantees on quality & performance</div>
            <div class="work-blocks">
              <WorkFrame />
              <WorkFrame />
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Work;


