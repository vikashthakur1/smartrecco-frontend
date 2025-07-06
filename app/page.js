import HeaderText from "@/components/HeaderText";
import InputForm from "@/components/InputForm";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <section className="min-h-screen bg-gradient flex">
    <section className="flex flex-col item-center max-w-[1200px] mx-auto flex-1">
    <Navbar/>
    <HeaderText/>
    <InputForm/>
    </section>
   </section>
  );
}
