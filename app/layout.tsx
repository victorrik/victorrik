//import { Rubik} from '@next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import localFont from '@next/font/local';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css'
 
// Font files can be colocated inside of `app`
const rubik = localFont({
  src: [
		{
			path:'../src/fonts/rubik/Rubik-Light.ttf',
			weight:"300",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-Regular.ttf',
			weight:"400",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-Medium.ttf',
			weight:"500",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-SemiBold.ttf',
			weight:"600",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-Bold.ttf',
			weight:"700",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-ExtraBold.ttf',
			weight:"800",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-Black.ttf',
			weight:"900",
			style:'normal'
		},
		{
			path:'../src/fonts/rubik/Rubik-LightItalic.ttf',
			weight:"300",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-Italic.ttf',
			weight:"400",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-MediumItalic.ttf',
			weight:"500",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-SemiBoldItalic.ttf',
			weight:"600",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-BoldItalic.ttf',
			weight:"700",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-ExtraBoldItalic.ttf',
			weight:"800",
			style:'italic'
		},
		{
			path:'../src/fonts/rubik/Rubik-BlackItalic.ttf',
			weight:"900",
			style:'italic'
		}
  ],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' className={rubik.className}  >
      <head />
      <body className='w-screen min-h-screen' >
				<main className='flex flex-col flex-1 bg-patitash bg-repeat' >
					<header className='flex justify-between items-center py-3 px-6 w-full bg-pickled-bluewood-900 max-w-screen-2xl mx-auto'>
						
							<div className='relative w-10 h-10' >
								<Link href="" >
									<Image fill src="https://firebasestorage.googleapis.com/v0/b/victorrik-1.appspot.com/o/src%2Fducky_128.png?alt=media" alt={'Logo victorrik'}  />
								</Link>
							</div>
							<nav className='flex gap-4 items-center text-white font-medium ' >
								<Link href="totopo" >
									Totopo
								</Link>
							</nav> 
					</header>
					{children}
				</main>
			</body>
    </html>
  )
}
