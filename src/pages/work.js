
import '../styles/styles.scss';
import '../styles/work.scss';
import Header from '../components/header';
import Footer from '../components/footer';

function Work() {
  return (
    <>
      <div className="container" >
        <Header />
        <div className="work-container">
        <div className="work-tagline ff-brandon">We design, build and ship digital products on time with
          written guarantees on quality & performance</div>
          <div className="work-blocks">
            <div className="work-blk ff-brandon">
              <div className="work-num ff-brandon-bold">01</div>
              <div className="work-title">Forby</div>             
              <div className="work-line ff-brandon">Designing a minimal and user friendly for a community
                where every opinion matters
              </div>
            </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Work;


