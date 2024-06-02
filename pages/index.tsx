import { useState } from "react";
import Link from "next/link";
import { fetchImageURL } from "./api/fetchPicture";
import Popup from "@/components/popup";


export const getServerSideProps = (async (context: any) => {
  const data = await fetchImageURL()
  console.log('in server props')
  const imageUrl = data.photos[6].src.large;
  return { props: { imageUrl } }
})



export default function Home({ imageUrl }: any) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={isOpen ? "bg-[#020229] w-dvw h-dvh relative filter blur-sm" : "bg-[#020229] w-dvw h-dvh relative"}>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-0 w-8/12 lg:w-4/12 animate-scaleIn1 absolute top-9 right-0 lg:right-12">
          <path fill="#FF0066" d="M38.9,-44.8C47,-30.8,47.8,-15.4,50.1,2.3C52.3,19.9,56.1,39.9,48,54.3C39.9,68.8,19.9,77.8,3.3,74.5C-13.3,71.2,-26.6,55.6,-39.6,41.1C-52.5,26.6,-65.1,13.3,-68.2,-3.1C-71.3,-19.5,-64.9,-39,-52,-53C-39,-66.9,-19.5,-75.3,-2.1,-73.2C15.4,-71.2,30.8,-58.7,38.9,-44.8Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-0 w-11/12 lg:w-5/12 animate-scaleIn2 absolute bottom-10 -left-4 lg:left-5 lg:bottom-2">
          <path fill="#D5F200" d="M42.5,-48.8C58,-47.2,75.7,-38.8,79.7,-26C83.6,-13.3,73.8,3.8,62,13.9C50.1,24.1,36.2,27.4,25.5,38C14.9,48.6,7.4,66.6,-3.6,71.6C-14.7,76.6,-29.4,68.7,-39,57.7C-48.6,46.7,-53.1,32.7,-56.9,19C-60.6,5.3,-63.6,-8.2,-61,-20.9C-58.3,-33.6,-50,-45.5,-38.9,-48.6C-27.8,-51.7,-13.9,-46,-0.2,-45.7C13.5,-45.4,26.9,-50.5,42.5,-48.8Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-0 w-11/12 lg:w-5/12 animate-scaleIn4 absolute  top-12 -left-12 lg:left-5 lg:top-2">
          <path fill="#79F3E3" d="M26.7,-34.4C36.5,-29.6,47.7,-24.4,56.9,-14.2C66,-4.1,73.1,11,72.9,27.4C72.7,43.9,65.3,61.7,51.9,66.3C38.5,70.9,19.3,62.3,5.8,54.4C-7.7,46.5,-15.5,39.2,-27.5,34.2C-39.5,29.1,-55.7,26.2,-59.8,18.3C-63.9,10.4,-55.9,-2.6,-51.8,-17.3C-47.7,-32,-47.4,-48.4,-39.4,-53.8C-31.4,-59.2,-15.7,-53.6,-3.6,-48.6C8.4,-43.6,16.9,-39.2,26.7,-34.4Z" transform="translate(100 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-0 w-8/12 lg:w-4/12 animate-scaleIn3  absolute bottom-12 right-0 lg:right-12">
          <path fill="#F149CE" d="M47.9,-64.2C63,-54.9,77,-42.2,79.9,-27.4C82.9,-12.5,74.7,4.6,68.1,21.2C61.4,37.9,56.3,54.1,45.2,65.5C34.1,76.9,17,83.4,2.1,80.5C-12.9,77.6,-25.8,65.4,-38.9,54.7C-52.1,44,-65.5,34.8,-71.7,21.8C-77.9,8.9,-76.9,-7.9,-71.3,-22.6C-65.7,-37.2,-55.5,-49.7,-42.8,-59.9C-30.2,-70,-15.1,-77.8,0.6,-78.7C16.4,-79.6,32.7,-73.5,47.9,-64.2Z" transform="translate(100 100)" />
        </svg>

        <div style={{ fontFamily: "cairo" }} className="font-cairo border-box px-6 py-6 lg:py-2 font-Cairo flex justify-center items-right flex-col bg-[#8999fb] w-10/12 lg:w-2/4 lg:h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <div className=" flex justify-around lg:justify-evenly items-center flex-col h-[90%] w-[100%]">
            <h1 className="mb-6 lg:-mt-20 lg:mb-3 text-[30px] lg:text-[40px] text-center font-bold ">Welcome to Hyperspace!</h1>
            <button onClick={handleClick} className="mb-6 lg:mb-10 text-[#020229] px-4 py-4 bg-[#FFFFFF] text-[20px] font-bold rounded-lg ">Click for the pop-up</button>
          </div>
          <Link href="/creative" className="text-[17px] text-right   text-[#FFFFFF] underline underline-offset-4 font-bold">Don&apos;t forget to check out the creative page </Link>
        </div>

      </div>
      {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} data={imageUrl} />}

    </>
  );
}
