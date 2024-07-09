import React from "react";
function Body() {
  return (
    <>
      <div className="mt-5 flex justify-center items-start">
        <img src="https://media.istockphoto.com/id/1293388093/photo/two-men-exercising.jpg?s=612x612&w=0&k=20&c=Dgqqf5mrFnhqEcMelLHvs36iNZaMNe4ZRiJFWQtCfCg="></img>
      </div>
      <div className="message">
        <h1 className="text-center text-4xl font-[700]  text-white">Think Health Think Message</h1>
        <p  className="w-1/2 text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>
        <div  className="w-full flex gap-10 items-center justify-center">
          <button className="btn">Learn More About Us</button>
          <button className="btn">Contact Us Today</button>
        </div>
        
      </div>
      <div className="flex flex-col gap-7 mt-5">
        <p className="text-red-500">Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      </div>
      <div className="hr"></div>
      <div className="flex flex-col gap-7 justify-center items-center">
        <h1 className="text-red-500 text-center text-2xl">Family Wellness MASSAGE THEREPY</h1>
        <p className="text-center w-1/3 "> Lorem Ipsum is simply dummy text of the printing and typesetting  since the 1500s, when an unknown Lorem Ipsum is simply dummy text
        industry.</p>
      </div>
    </>
  );
}

export default Body;
