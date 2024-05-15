import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-sky-300 py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='text-7xl font-bold tracking-wider'>
                    I'm Navid
                </h1>
                <p className='mt-4 text-3xl text-rose-600 capitalize tracking-wide'>
                    Front End Developer
                </p>
                <p className='mt-2 text-lg text-slate-700 tracking-wide'>
                    Where my creative and intuitive sides meet 
                </p>
                <div className='flex gap-x-4 mt-4'>
                    <a href="https://github.com/khan98">
                        <FaGithubSquare className='h-8 w-8 text-rose-500 hover:text-black duration-300' />
                    </a>
                    <a href="https://www.linkedin.com/in/navid-k-a15309188/">
                        <FaLinkedin className='h-8 w-8 text-rose-500 hover:text-black duration-300' />
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} className='h-80 lg:h-96'/>
            </article>
        </div>
    </div>
  )
}

export default Hero