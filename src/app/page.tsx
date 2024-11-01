import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex items-center bg-cover" style={{ backgroundImage: `url(/bg-main.jpeg)` }}>
        
        <div className="container flex justify-between flex-col md:flex-row items-center gap-8">
          <Image src="/roboticsandmotors.jpeg" alt="Robotics and motors" className="rounded-[20px]"  width={600} height={600} />
          <div className="font-sans">
          <h1 className="text-6xl text-white font-bold text-center">Robotics and Motors</h1>
          <p className="text-white text-4xl text-center">сайт в разработке</p>
          </div>
        </div>
       
      </main>
      {/* <footer className="">
        footer
      </footer> */}
    </div>
  );
}
