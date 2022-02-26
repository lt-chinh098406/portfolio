import React from 'react';
import items from './data.js';

import { AiTwotoneStar } from 'react-icons/ai';

function Skills() {
  return (
    <div id="Skill" className="pt-[50px] px-7 pb-[40px] bg-white">
      <div className="mb-8">
        <h1 className="title">My Skills</h1>
        <p className="paragraph">
          Everything I had self-studied on my own in the past period.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:px-[10%] md:gap-10">
        {items.map((item) => (
          <div className="p-5 border rounded-xl border-gray-400 relative">
            <div
              style={{ backgroundColor: `${item.color}` }}
              className="absolute md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-full top-[50%] translate-y-[-50%] flex justify-center items-center"
            >
              <AiTwotoneStar size="16px" color="#fff" />
            </div>
            <div className="ml-[50px] md:ml-[80px]">
              <div className="text-tx-primary text-[22px] font-semibold line-clamp-1">
                {item.name}
              </div>
              <div className="paragraph text-14 line-clamp-1">{item.skill}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
