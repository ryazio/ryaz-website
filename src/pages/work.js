
import '../styles/styles.scss';
import '../styles/work.scss';
import Header from '../components/header';
import Footer from '../components/footer';

function Work() {
  return (
    <>
      <div className="container" >
        <Header />
        <div class="work-container">
        <div class="work-tagline ff-brandon">We design, build and ship digital products on time with
          written guarantees on quality & performance</div>
          <div class="work-blocks">
            <div class="work-blk ff-brandon">
              <div class="work-num ff-brandon-bold">01</div>
              <div class="work-title">Forby</div>             
              <div class="work-line ff-brandon-light">Designing a minimal and user friendly for a community
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


