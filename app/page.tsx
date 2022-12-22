import Icons from '@components/Icons'
import ProyectList from '@components/ProyectList'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getStoragePath } from 'utils/funtions'

const PrincipalPage = () => {
	return (
		<div className='flex flex-col md:flex-row w-full p-6 gap-6 bg-white max-w-screen-2xl mx-auto' >
			<aside className='min-w-[13rem] w-full md:w-60 p-5 items-center gap-2 flex flex-col sm:flex-row md:flex-col self-start bg-fiord-900 text-white'  >
				<div className='min-w-[10rem] w-40 h-40 relative rounded-full group overflow-hidden bg-fiord-700' >
					<Image src={getStoragePath("src/profile.png")}
						className='rounded-full z-10'
						alt={'Profile picture'}
						fill
						// width={160}
						// height={160}
						//style={{position:"relative"}}
					/> 
					<Image src={ getStoragePath('src/patitash_512.jpg')}
						className='absolute top-0 z-[1] rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100' 
						alt={'Profile picture'}
						fill
						// width={160}
						// height={160}
					/> 
				</div>
				<div className='flex flex-col gap-2' >
					<div className='flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-4 md:gap-2' >
						<ul className='flex gap-3 justify-center flex-wrap text-2xl text-iceberg-300' >
							<li>
								<Link className='transition-all hover:text-iceberg-500' title="instagram" href="https://www.instagram.com/victorrik" >
									<Icons name="instagram" />
								</Link>
							</li>
							<li>
								<Link className='transition-all hover:text-iceberg-500' title="github" href="https://www.github.com/victorrik" >
									<Icons name="github" />
								</Link>
							</li>
							<li>
								<Link className='transition-all hover:text-iceberg-500' title="twitter" href="https://www.twitter.com/victorrik" >
									<Icons name="twitter" />
								</Link>
							</li>
							<li>
								<Link className='transition-all hover:text-iceberg-500' title="Linkedin" href="https://www.linkedin.com/in/victorrik/" >
									<Icons name="linkedin" />
								</Link>
							</li>
							<li>
								<Link className='transition-all hover:text-iceberg-500' title="Microsoft learn" href="https://learn.microsoft.com/en-us/users/victorrik/" >
									<Icons name="microsoft" />
								</Link>
							</li>
						</ul>
						<span className='block text-center' >
							<Icons name="xbox" /> VICTORRIK
						</span>
						<div className='text-center text-iceberg-300'>
							<Link download="CV.pdf" target="_blank" href={getStoragePath('src/CV.pdf')} className='hover:border-b-2 text-xl hover:text-iceberg-500' >
								<Icons name="person-badge" /> CV
							</Link>
						</div>
					</div>
					
					<p className='text-justify' >
						Desde que aprendí hacer desarrollo web quise mi propia página, ahora solo me falta llenarla.
					</p>
				</div>
			</aside>
			<section className='flex flex-col gap-4 text-fiord-700' >
				<article>
					<h1 className='font-bold text-3xl text-fiord-900 mb-2'>Un poco de mi</h1>
					<p className='text-justify md:text-left' >
						Me entusiasma la tecnología y lo que se puede hacer con ella y los retos que pueden presentar, aprender cosas nuevas y tratar de aplicar todo el conocimiento que he adquirido por ejemplo, esta página comencé usando <Link title="Create React App" className='font-bold hover:underline' href="https://create-react-app.dev/" >CRA</Link> de ahí conocí <Link title="Vite" className='font-bold hover:underline' href="https://vitejs.dev/" >Vite</Link> y fue hermoso, pero ahora decidí probar y aprender a usar <Link title="Next.js" className='font-bold hover:underline' href="https://nextjs.org/" >Next.js</Link> y que mejor manera que poniendolo en practica.
					</p>
				</article>
				<article>
					<h2 className='font-semibold text-xl text-fiord-900 mb-2' >Portfolio</h2>
					<p className='mb-2' >
						Trabajos que hice y proyectos en los que participe.
					</p>
					<ProyectList/>
				</article>
				<article>
					<h2 className='font-semibold text-xl text-fiord-900' >Blog</h2>
					<p>
						Un poco de desarrollo, un poco pensamientos, un poco de reviews, un poco de todo lo que abarco de manera general <strong>UwU</strong> 
					</p>
					<strong>Proximamente*</strong>
				</article>
			</section>
		</div>
	)
}

export default PrincipalPage
