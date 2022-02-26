import React, { useState } from 'react';
import { RiMenu5Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

function Header({ isMobile }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between items-center pb-2 mb-2 border-b border-[shadow-xl] ">
      <h1 className="font-logo text-green text-48">Binzxje</h1>
      <div className=" h-full ">
        <div className="bg-white p-2 md:rounded-none md:shadow-none rounded-full shadow-xl relative">
          <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
            {openMenu && isMobile ? (
              <MdOutlineClose
                size={'24px'}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            ) : !openMenu && isMobile ? (
              <RiMenu5Fill size={'24px'} color="#000" onClick={handleMenu} />
            ) : (
              <div className="flex">
                <a href="#home" className="cursor-pointer">
                  Home
                </a>
                <a href="#skill" className="cursor-pointer">
                  Skill
                </a>
                <a href="#academic" className="cursor-pointer">
                  Academic
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
                <a href="#contact" className="cursor-pointer">
                  Contact
                </a>
              </div>
            )}
            {openMenu && (
              <div className="z-10 absolute right-2 top-[100%] bg-white p-8 text-center text-tx-primary text-13 flex flex-col gap-3 ">
                <a href="#home" className="cursor-pointer">
                  Home
                </a>
                <a href="#skill" className="cursor-pointer">
                  Skill
                </a>
                <a href="#academic" className="cursor-pointer">
                  Academic
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
                <a href="#contact" className="cursor-pointer">
                  Contact
                </a>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
