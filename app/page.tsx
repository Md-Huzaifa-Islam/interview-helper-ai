import Chat from "@/components/Chat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
      <Chat />
    </main>
  );
}
