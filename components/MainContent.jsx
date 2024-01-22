'use client';

// import Image from 'next/image';
import '../styles/page.css';
import '../styles/globals.css';



const MainContent = () => {
  return (
    <section>
      <div
    
      >
        {/* <Image
          className="rounded-full"
          src="/assets/images/pic.png"
          width={80}
          height={80}
          alt="My image"
        /> */}

        <div className="space-y-1 overflow-hidden">
          <h2
            // style={{ lineHeight: '5rem' }}
            className="break-words whitespace-normal overflow-hidden 
            z-10 text-6xl font-bold text-center text-transparent 
            duration-1000 bg-white cursor-default text-stroke 
            animate-title md:text-6xl bg-clip-text"
          >
            Join the Waitlist for My
          </h2>
          <h1
            className="z-10 text-6xl font-bold text-center text-transparent 
        duration-1000 cursor-default md:text-7xl whitespace-nowrap 
        bg-clip-text bg-white bg-gradient-to-r from-orange-200 
        to-orange-800 animate-fade-in-3"
          >
            Newsletter
          </h1>
        </div>
        {/* <p className="text-center p-text animate-fade-in-3 text-slate-300">
          Subscribing here is the best way to follow my work, and
          read my full, nuanced and uncensored thoughts on
          things, enabling you to receive updates whenever new
          content is published.
        </p>

        <p className="text-center p-text animate-fade-in-3 text-slate-300">
          You may *occasionally* receive other perks—not sure
          what those will be but I will update this page when I
          figure it out. You may unsubscribe/opt out at any time
          you wish. You will never be spammed, and your e-mail
          address will never be shared with or sold to any third
          party.
          <br />
          —Yehgha
        </p> */}
      </div>
    </section>
  );
};

export default MainContent;
