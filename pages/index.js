import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import Image from 'next/image'
import nabraj from '../public/nabraj.png'
import design from '../public/design.png'
import consulting from '../public/consulting.png'
import code from '../public/code.png'
import web1 from '../public/web1.png' 
// 2044x1534
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react';
import { BiDownload } from "react-icons/bi";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? 'dark': "" } >
      <Head>
        <title>Nabraj Poudel Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-10 dark:bg-gray-600 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>developed by </h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill 
               onClick={()=> setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl'/></li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 flex items-center w-30 gap-2' href="pdf.pdf" download><BiDownload/>Resume</a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Nabraj Poudel</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-white'>
              Freelancer providing services for programming and design content needs.
               Join me down below and let's get cracking!
               </p>  
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <a href= "https://twitter.com/Nabraj28" target="_blank">
              <AiFillTwitterCircle />
              </a>
            <a href="https://www.instagram.com/nabraj.poudel/" target="_blank">
            <AiFillInstagram />
            </a>
            <a href="https://www.facebook.com/nabrajpoudel.1122" target="_blank">
            <AiFillFacebook />
            </a>
          </div>
          <div className=' mx-auto bg-gradient-to-b from-white rounded-full w-70 h-70 mt-20 overflow-hidden md:h-96 md:w-96 fill-current object-cover'>
            <Image src={nabraj} />
          </div>
        </section>
        {/* Second page here */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the begining of my journey as a freelancer, Designer
              and developer, I've done remote work for <span className="text-teal-500">agencies</span> counsolted for <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business and consumer use.
            </p>
            <p>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          {/* cards */}
          {/* first card */}
          <div className='lg:flex gap-10 justify-center'>
          <div className='text-center shadow-xl p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} style={{margin:" auto"}} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beutiful Designs</h3>
            <p className='py-2 max-w-md'>
              Creating elegant designs suited for your needs
              design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-grey-800 py-1'>Photoshop</p>
            <p className='text-grey-800 py-1'>Canva</p>
          </div>
          {/* second card */}
          <div className='text-center shadow-xl p-10 rounded-xl my-10'>
            <Image src={code} width={100} height={100} style={{margin:" auto"}} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Code your dream project</h3>
            <p className='py-2 max-w-md'>
              Do you have an idea for your next website ? 
              Lets make it a reality.
            </p>
            <h4 className='py-4 text-teal-600'>Coding tools I use</h4>
            <p className='text-grey-800 py-1'>React Js</p>
            <p className='text-grey-800 py-1'>Tailwind</p>
            <p className='text-grey-800 py-1'>Next Js</p>
          </div>
          {/* third card */}
          <div className='text-center shadow-xl p-10 rounded-xl my-10'>
            <Image src={consulting} width={100} height={100} style={{margin:" auto"}} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
            <p className='py-2 max-w-md'>
              Are you intrested in feedback for you current project?
              I can give you tips and tricks to level it up
            </p>
          </div>
          </div>
        </section>
        {/* cards finished */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>
              Portfolio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I'm obsessed with making things and even more obsessed with making things better.
              My speciality is font-end web-design and development making pixel magic in Photoshop
              and turning it into beautiful semantic HTML and CSS. My intrests, however, extend beyond 
              the web and I love helping people with branding, print design and marketing strategy. I 
              even love making designs move by creating professional graphics and video.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
            <div className='basis-1/3  flex-1'> 
              <Image src= {web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} />
              </div>
          </div>
        </section>
      </main>
      <section className='h-20 bg-gray-200 dark:bg-black dark:text-white'>
        <div className='text-center p-5 ' >
          Copyright © Nabraj Poudel 2022 - All rights reserved</div>
      </section>
    </div>
  )
}
