// import Image from "next/image";
// import Link from "next/link";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="min-h-screen bg-black relative">
        <div className="absolute top-0 inset-0 bg-[radial-gradient(circle,_rgba(0,102,255,0.6)_10%,_rgba(0,0,0,0)_50%)] opacity-80 blur-2xl z-10 h-[30%] w-[50%] -translate-y-1/2 translate-x-1/2"></div>
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-[75%] h-[75%] object-cover z-0 md:hidden"
          src="/compressed.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-[75%] h-[75%] object-cover z-0 max-md:hidden"
          src="/output6.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute bottom-0 inset-x-0 bg-[radial-gradient(circle,_rgba(0,102,255,0.6)_65%,_rgba(0,0,0,0)_20%)] opacity-40 blur-2xl z-10 h-[20%] w-[100%] translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center max-md:mt-[80px] mt-[100px]">
          <h2 className="mt-64 text-[56px] font-bold">
            Revolution of Production - Starts Today.
          </h2>
          <p className="text-[34px] opacity-75">
            Modern Solutions of Your Buisness
          </p>
        </div>
        <div className="container flex justify-between flex-col md:flex-row items-center gap-8"></div>
      </main>
      <footer className=" bg-black text-white">
        <div className="flex flex-col items-center container py-[56px]">
          <h1 className="title text-[24px] ">Robotics and Motors</h1>
          <p className="lg:text-[24px]">
            сайт в разработке, по вопросам обращайтесь:
          </p>
          <Link
            className="text-[24px] underline"
            href="mailto:info@robotics-motors.com"
          >
            info@robotics-motors.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
