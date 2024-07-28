import { Fade, Slide } from 'react-awesome-reveal';
import logo from '../assets/keyboard.png'
import Faq from '../components/ui/homePage/Faq';
import Offer from '../components/ui/homePage/Offer';
const AboutUsPage = () => {
  return (
    <section>
      <div className="about-section-bg flex justify-center items-center">
        <Slide>
          <h2 className="lg:text-5xl text-3xl font-bold text-white text-center mb-8">About <span className="text-violet-500" >Us</span> </h2></Slide>
      </div>
      <div className='my-8 mx-8 lg:mx-16'>
        <Fade delay={1e2} cascade damping={1e-1}>
          <div className=" flex justify-center items-center lg:flex-row flex-col">

            <div className="left w-full">
              <h2 className="text-3xl font-bold mb-2">Mechanical <span className="text-violet-500" >Keyboard Shop</span> </h2>
              <p className='text-lg mr-8'> where precision meets innovation in the world of mechanical engineering. With over 4 years of experience, our dedicated team of experts is committed to delivering top-notch mechanical solutions that drive efficiency and excellence. From design and prototyping to manufacturing and maintenance, we leverage cutting-edge technology and industry best practices to meet your unique needs.
              </p>
            </div>

            <div className="right w-full">
              <img src={logo} className='w-full' alt="" />
            </div>
          </div>

        </Fade>
      </div>
      <Offer />
      <div className='mx-8 lg:mx-16'>
        <Faq />
      </div>

    </section>
  );
};

export default AboutUsPage;
