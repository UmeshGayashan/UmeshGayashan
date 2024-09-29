import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { profilePic } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col lg:flex-row">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5 w-full`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Umesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Computer Engineering Undergraduate<br className='sm:block hidden' />
            seeking to explore new knowledge <br className='sm:block hidden' />
            and learn new technologies.
          </p>
        </div>
        <div className="homepage-first-area-right-side flex items-center justify-center mt-5 lg:mt-0 lg:justify-end">
          <div className="homepage-image-container">
            <div className="homepage-image-wrapper">
              <img
                src={profilePic}
                alt="about"
                className="homepage-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className='w-full h-10' />
      <div className='xs:bottom-10 bottom-5 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
