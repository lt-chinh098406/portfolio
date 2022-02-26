import React from 'react';
import Ava from '../../../access/IMG_2105.JPG';

function Hero() {
  return (
    <div>
      <div className="text-48 text-tx-primary font-bold">
        <h1>Hey There,</h1>
        <h1>I'm Chính</h1>
      </div>
      <div className="paragraph mb-4">
        <p className="pb-[4px]">
          I'm passionate and very interested in <br /> Web Programming
        </p>
        <p className="pb-[4px]">I self-studied to be Front-End developer</p>
        <p>And my goal is becoming a Software Engineer.</p>
      </div>
      <div className="h-full">
        <div
          style={{
            backgroundImage: `url('${Ava}')`,
          }}
          className="w-[100%] h-full box-border shadow-inner bg-no-repeat bg-cover absolute left-0"
        ></div>
      </div>
    </div>
  );
}
export default Hero;
