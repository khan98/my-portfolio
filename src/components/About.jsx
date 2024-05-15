import aboutSvg from '../assets/about.svg'; 
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className=' py-20 text-rose-600' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64'/>
        <article>
            <SectionTitle text='about me'/>
            <p className='text-slate-600 mt-8 leading-loose'>
                I am a front-end developer located near Toronto Ontario with a passion for exploring the horizons. I am an experienced graphic designer and developer, specializing in ReactJSX and Tailwind, who aims to utilize my creative side to develop advanced front-end solutions that will enhance the user experience
            </p>
        </article>        
      </div>
    </section>
  )
}

export default About
