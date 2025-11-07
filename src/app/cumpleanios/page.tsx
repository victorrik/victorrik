import { Icon } from "@vr/components/Icon";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Victorrik",
  description: "Victorrik cumpleaños",
  openGraph: {
    images: [
      {
        url: "/images/birthdayDucks-959_720.jpg",
      },
    ],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Home() {
  return (
    <main className="font-delius bg-size-cover flex min-h-screen flex-col bg-[#a1dae3]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute h-full w-full backdrop-brightness-90" />
          <Image
            width={1024}
            height={1024}
            src="/images/birthdayDucks-1024.jpg"
            alt="Ducks birthday"
          />
        </div>

        <div className="absolute flex flex-col justify-center gap-5 text-center text-5xl font-bold text-shadow-lg/80 text-shadow-[#683e03] md:text-6xl md:text-shadow-lg/95 lg:text-8xl lg:text-shadow-lg/90">
          <h1
            className="text-[#9fe2f5] transition-all"
            style={{
              WebkitTextStroke: "2px #fed878",
            }}
          >
            TE INVITO A
          </h1>
          <h1
            className="stroke-2 text-[#ffd145] transition-all"
            style={{
              WebkitTextStroke: "2px #abe7f7",
            }}
          >
            MI CUMPLEAÑOS
          </h1>
          <div className="text-2xl md:text-4xl">
            <h2
              className="text-[#ffd145] transition-all"
              style={{
                WebkitTextStroke: "2px #abe7f7",
              }}
            >
              Este 15 de noviembre
            </h2>
            <h2
              className="text-[#ffd145] transition-all"
              style={{
                WebkitTextStroke: "2px #abe7f7",
              }}
            >
              a partir de las 3:00 PM
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-4 font-bold">
        <div className="flex flex-col gap-6 p-2">
          <h3>
            Por motivo de mi cumpleaños, realizare una carnitada asada en mi
            casa.
          </h3>
          <h3>
            Habra carne y refrescos. Tambien podras traer tu propia bebida y
            botana de tu preferencia.
          </h3>
        </div>
        <a
          href="https://maps.app.goo.gl/Q4U9ubGQtE9aSapP7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 font-bold text-white"
        >
          <Icon name="pin-map" className="text-2xl text-white" />
          Ubicación
        </a>
        <a
          href="https://wa.me/+527441630052?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20tu%20cumpleaños%20🎉"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-[#25d366] px-8 py-4 font-bold text-white"
        >
          <Icon name="whatsapp" className="text-2xl text-white" />
          Confirmar asistencia
        </a>
      </div>
    </main>
  );
}
