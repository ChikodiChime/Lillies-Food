
import play from '../../../icons/img/google-play.png';
import app from '../../../icons/img/app-store.png';
import img2 from '../../../icons/img/img2.png';
import { HeroWrapper } from './Style';
const Hero = () => {
  return (
    <HeroWrapper>
      <div className='space-between hero'>
          <div className="hero-left">
              <h1>Order <span>food</span> anytime, anywhere</h1>
              <p>Browse from our list of specials to place your order and have food 
                  delivered to you in no time. Affordable, tasty and fast </p>
             
              <img src={play} alt="" />
              <img src={app} alt="" />
              
          </div>
          <div className="hero-right">
              <img src={img2} alt="" />
          </div>
      </div>
    </HeroWrapper>
  )
}

export default Hero