import React from 'react';

const NavBar = () => {
  const navItems = [
    ["LOGO"],
    ["Home", "About", "Services", "Contact"],
    ["Catalogue"],
  ];

  return (
    <div className="w-full h-[80px] columns-4 items-center px-10 flex justify-center">
      <div className="font-medium text-lg w-full">
        {navItems[0].map((logo, index) => (
          <div key={`logo-${index}`}>{logo}</div>
        ))}
      </div>
      <div className="flex gap-10 justify-center w-full">
        {navItems[1].map((item, index) => (
          <a
            key={`nav-item-${index}`}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-normal uppercase tracking-wider"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        {navItems[2].map((item, index) => (
          <p key={`catalogue-item-${index}`} className="text-sm font-medium uppercase w-auto tracking-wider">
            {item}
          </p>
        ))}
      </div>
      <div className="flex w-auto bg-[#1b1b1b] py-2 px-4 rounded-full items-center justify-center gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.177 17.75H14.5C16.8306 17.75 17.996 17.75 18.9081 17.3499C19.9995 16.8712 20.8712 15.9995 21.3499 14.9081C21.75 13.996 21.75 12.8306 21.75 10.5C21.75 8.16935 21.75 7.00403 21.3499 6.09195C20.8712 5.00046 19.9995 4.12885 18.9081 3.65008C17.996 3.25 16.8306 3.25 14.5 3.25H9.5C7.16935 3.25 6.00403 3.25 5.09195 3.65008C4.00046 4.12885 3.12885 5.00046 2.65008 6.09195C2.25 7.00403 2.25 8.16935 2.25 10.5C2.25 12.8306 2.25 13.996 2.65008 14.9081C3.12885 15.9995 4.00046 16.8712 5.09195 17.3499C5.36539 17.4699 5.66159 17.5538 6.00513 17.6127L5.74647 18.3886C5.36053 19.5465 5.16756 20.1254 5.38982 20.4362C5.45866 20.5325 5.54931 20.6111 5.65436 20.6657C5.99352 20.8417 6.53933 20.5688 7.63093 20.023L12.177 17.75Z"
            fill="#fff"
            fillOpacity="1"
          ></path>
        </svg>
        <p className='text-white text-xs uppercase font-medium tracking-wider'>Contact</p>
      </div>
    </div>
  );
};

export default NavBar;
