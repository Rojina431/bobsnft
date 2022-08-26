import './home.css'
import CenterImage from '../../images/centerfirst.png'
import FirstHero from '../../images/first.png'
import SecondHero from '../../images/second.png'
import ThirdHero from '../../images/third.png'
import FourthHero from '../../images/fourth.png'
import FifthHero from '../../images/fifth.png'
import SixthHero from '../../images/sixth.png'
import SeventhHero from '../../images/seventh.png'
import EightHero from '../../images/eighth.png'
import NinethHero from '../../images/nineth.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomeComponent = () => {
    return (
        <div className="home">
         <div className='full-screen'>
             <div className='center-content'>
                 <img src={CenterImage} alt="center" className='center-image'/>
                 <div className='center-text'>
                  <div className='h1-title'><span>MEET THE</span><br/><span>BOBS</span></div>
                  <div className='p-para'>BOBS, also known as Blockchain or Bust, is committed to standing with and for the continuation of the push for the worldwide acceptance of decentralized currency.</div>
                 </div>
             </div>
             <div className='left-content'>
                 <div className='hero-grid'>
            
                     <div className='two-row'>
                     <AnimationOnScroll
             animateIn="animate__bounceInLeft"
             duration={5}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={FirstHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                        <AnimationOnScroll
             animateIn="animate__bounceInLeft"
             duration={5}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={SecondHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                     </div>
                    
            
                     <div className='two-row _02-left'>
                     <AnimationOnScroll
             animateIn="animate__bounceInRight"
             duration={5}
            delay={0}
            initiallyVisible={true}
          >
                       <img src={ThirdHero} alt='img' className='hero-img'/>
                       </AnimationOnScroll>
                     </div>
                     
             
                     <div className='two-row'>
                     <AnimationOnScroll
             animateIn="animate__bounceInLeft"
             duration={3}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={FourthHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                        <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            duration={3}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={FifthHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                     </div>
                 </div>
             </div>
             <div className='right-content'>  
                 <div className='hero-grid'>
            
                     <div className='two-row'>
                     <AnimationOnScroll
            animateIn="animate__bounceInRight"
            duration={3}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={SixthHero} alt='img' className='hero-img right-first'/>
                        </AnimationOnScroll>
                        <AnimationOnScroll
            animateIn="animate__bounceInRight"
            duration={3}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={SeventhHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                     </div>
              
                     <div className='two-row _02-right'>
                     <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            duration={3}
            delay={0}
            initiallyVisible={true}
          >
                       <img src={EightHero} alt='img' className='hero-img'/>
                       </AnimationOnScroll>
                     </div>
                     <div className='two-row'>
                     <AnimationOnScroll
           animateIn="animate__bounceInRight"
            duration={3}
            delay={200}
            initiallyVisible={true}
          >
                        <img src={NinethHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                        <AnimationOnScroll
            animateIn="animate__bounceInRight"
            duration={3}
            delay={0}
            initiallyVisible={true}
          >
                        <img src={FirstHero} alt='img' className='hero-img'/>
                        </AnimationOnScroll>
                     </div>
                 </div>
                 </div>
         </div>
        </div>
    )
}

export default HomeComponent