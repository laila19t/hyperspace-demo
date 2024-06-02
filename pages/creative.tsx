import Bubbles from "@/components/bubbles";
import { ReactTyped } from "react-typed";


export default function Creative(){
    return (
        <div className="relative w-full h-screen bg-[#020229]">
            <Bubbles />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
                <ReactTyped style={{fontFamily:"cairo"}} className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] text-5xl lg:text-7xl font-bold" strings={["Welcome to the cool part!"]} typeSpeed={45}  />
                <h2 style={{fontFamily:"cairo"}} className=" text-xl lg:text-2xl font-semibold mt-5">Tap on a bubble to make it glossier</h2>
            </div>
        </div>
    );
}