import { HydrateClient } from "@vr/trpc/server";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="font-delius bg-size-cover min-h-screen bg-[#a1dae3]">
      <div className="flex items-center justify-center">
        <Image
          width={1024}
          height={1024}
          src="/images/birthdayDucks.png"
          alt={"Ducks birthday"}
        />
        <div className="absolute flex flex-col items-center justify-center gap-5 text-4xl font-bold text-shadow-lg/40 text-shadow-[#683e03] md:text-6xl md:text-shadow-lg/70 lg:text-8xl lg:text-shadow-lg/90">
          <h1
            className="text-[#9fe2f5] transition-all"
            style={{
              WebkitTextStroke: "2px #fed878",
            }}
          >
            TE INVITO A MI
          </h1>
          <h1
            className="stroke-2 text-[#ffd145] transition-all"
            style={{
              WebkitTextStroke: "2px #abe7f7",
            }}
          >
            CUMPLEAÑOS
          </h1>
        </div>
      </div>
    </main>
  );
}
