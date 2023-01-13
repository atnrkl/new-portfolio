import React from "react";
import Marquee from "react-fast-marquee";
//*import logos

import { imagelist } from "../imagelist";

const Marque = () => {
  function shuffle(array: string[]) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  return (
    <div className="flex items-center flex-col justify-center w-full h-full">
      <Marquee direction="right" gradient={false}>
        {shuffle(imagelist).map((item, index) => (
          <img
            key={index}
            className="w-5 h-5 m-1"
            draggable={false}
            src={item}
            alt=""
          />
        ))}
      </Marquee>
      <Marquee gradient={false}>
        {shuffle(imagelist).map((item, index) => (
          <img
            key={index}
            className="w-5 h-5 m-1"
            draggable={false}
            src={item}
            alt=""
          />
        ))}
      </Marquee>
      <Marquee direction="right" gradient={false}>
        {shuffle(imagelist).map((item, index) => (
          <img
            key={index}
            className="w-5 h-5 m-1"
            draggable={false}
            src={item}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;

/* 
 <img className="w-5 h-5 m-1" draggable={false} src={jsLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={redisLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={cssLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={graphLogo} alt="" />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={tailwindLogo}
          alt=""
        />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={mongodbLogo}
          alt=""
        />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={pythonLogo}
          alt=""
        />
        <img className="w-5 h-5 m-1" draggable={false} src={reactLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={nextLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={nftLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={htmlLogo} alt="" />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={blockchainLogo}
          alt=""
        />
        <img className="w-5 h-5 m-1" draggable={false} src={sassLogo} alt="" />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={nodejsLogo}
          alt=""
        />
        <img className="w-5 h-5 m-1" draggable={false} src={linuxLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={tsLogo} alt="" />
        <img
          className="w-5 h-5 m-1"
          draggable={false}
          src={styledLogo}
          alt=""
        />
        <img className="w-5 h-5 m-1" draggable={false} src={gitLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={jsLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={reduxLogo} alt="" />
        <img className="w-5 h-5 m-1" draggable={false} src={redisLogo} alt="" />


*/
