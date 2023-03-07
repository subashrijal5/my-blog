import React from "react";
// import styled from "styled-components";


// const DonateButton = styled.button`
//   outline: none;
//   border: none;
//   background-color: #27b927;
//   color: #fff;
//   font-size: 16px;
//   font-weight: 700;
//   border-radius: 8px;
//   padding: 8px 2em;
//   margin-top: 3em;
//   cursor: pointer;
//   border: 2px solid transparent;
//   transition: all 350ms ease-in-out;

//   &:hover {
//     background-color: transparent;
//     border: 2px solid #27b927;
//   }
// `;


export function TopSection() {
  return (
    <div className="w-full h-full absolute top-0 left-0 text-lg font-bold flex flex-col items-center z-[99] bg-regal-blue pt-10">
      {/* <TopSectionContainer> */}
        <h1 className="m-0 font-extrabold text-white text-4xl">Global Warming</h1>
        <h4 className="m-0 text-white mt-10 font-bold">Keep it cool for safe living</h4>
        <p className="m-0 mt-3 text-white leading-6 font-bold max-w-md text-center">
          You can help us cool off our world and have it go back to it's best
          state ever by donating to help fix our only world and our beloved
          EARTH! Be cool and let the earth be cool. Let the ice burgs to live.
          Globe is warming and will set to fire. Stop polluting, it will cost
          extra.
        </p>
        {/* <DonateButton>Donate</DonateButton> */}
    </div>
  );
}
