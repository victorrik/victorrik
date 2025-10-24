import { HydrateClient } from "@vr/trpc/server";
import Image from "next/image";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen  justify-center items-center bg-[#5c9dbc]">
        <Image className="w-full" width={1536} height={1024} src="/images/ducksWorking.png" alt={"Duck working"} />
      </main>
    </HydrateClient>
  );
}
