import React from 'react';

function Footer() {
  return (
    <div className="bg-primary py-[40px] px-6">
      <h1 className="title text-26 mb-5">Below is some contact information.</h1>
      <p className="title text-26 mb-2">Information</p>
      <p className="paragraph mb-4">145 New York, FL 5467, USA</p>
      <ul className="text-black text-20 flex flex-col gap-4 ml-4">
        <li>SERVICES</li>
        <li>WORKS</li>
        <li>NOTES</li>
        <li>EXPERIENCE</li>
      </ul>
      <p className="title text-26 mb-5">
        Start by <span className="text-red underline">saying hi</span>
      </p>
    </div>
  );
}
export default Footer;
