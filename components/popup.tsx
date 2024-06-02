
export default function Popup({isOpen, setIsOpen,data}: any) {

    function handleClose(){
      setIsOpen(!isOpen)
    }
    return (
      <div style={{fontFamily:"cairo"}} className="border-box rounded-lg bg-[#FFFFFF]  w-9/12 md:w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col px-6 lg:px-1 py-6 drop-shadow-xl">
           
           <div className="flex justify-between flex-col items-center">
            <h1 className="mb-3 text-[20px] font-bold text-[#020229]">Thanks for clicking!</h1>
            <h2 className="mb-3 w-3/4 text-center text-[17px] font-semibold text-[#020229]">Enjoy this picture sent to you straight from a server component</h2>
            <div className="mb-4 rounded-lg w-[230px] h-[230px] flex justify-center align-center bg-[#d7f200]"><img src={data} className="rounded-lg bg-cover border-4 border-[#d7f200]"/> </div>
            <button className=" text-[#020229] bg-[#d7f200] text-[17px] px-5 py-1 font-semibold rounded-lg" onClick={handleClose}>Close</button>
           </div>
           
     </div>
    );
  }
  
  
  
  