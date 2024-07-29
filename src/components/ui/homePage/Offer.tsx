
import '../../../style.css'
import c2 from '../../../assets/c2.png';
import c3 from '../../../assets/c3.png';
import c4 from '../../../assets/c4.png';
import c5 from '../../../assets/c1.png';
const Offer: React.FC = () => {
    return (
        <section className=' offer-background '>
            <div className='flex flex-col items-center mt-16'>
                <h2 className="text-4xl  font-bold  text-white">Our <span className="text-violet-500" >Clients</span> </h2>
                <div className=' flex items-center mt-8 justify-around gap-4 lg:gap-24 '>
                    <div className="">
                        <img className='lg:w-[100px] w-20' src={c2} alt="" />
                    </div>
                    <div className="">
                        <img className='lg:w-[100px] w-20' src={c3} alt="" />
                    </div>
                    <div className="">
                        <img className='lg:w-[100px] w-20' src={c4} alt="" />
                    </div>
                    <div className="">
                        <img className='lg:w-[50px] lg:block hidden  ' src={c5} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
