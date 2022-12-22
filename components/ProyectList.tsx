import { getStoragePath } from '@utils/funtions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Icons from './Icons';
interface Proyect {
	title:string;
	description?:string;
	cover?:boolean;
	image?:string;
	url?:string;
	iosUrl?:string;
	androidUrl?:string;
}
const listado:Array<Proyect> = [
	{
		title:"COCYTIEG",
		image:getStoragePath('src/portfolio/cocytieg.png'),
		url:"https://cocytieg.gob.mx/",
	},
	{
		title:"COCYTIEG - FESGRO",
		image:getStoragePath('src/portfolio/cocytieg.png'),
		url:"https://fesgro.cocytieg.gob.mx/",
	},
	{
		title:"COCYTIEG - PEI",
		image:getStoragePath('src/portfolio/cocytieg.png'),
		url:"https://pei.cocytieg.gob.mx/",
	},
	{
		title:"Paseos en lanchas y yates en Acapulco",
		cover:true,
		image:getStoragePath('src/portfolio/PYLA.jpg'),
		url:"http://paseoslanchasyatesacapulco.com/",
	},
	{
		title:"QUICKZZ",
		//description:"string",
		image:getStoragePath('src/portfolio/quickzz.webp'),
		cover:true,
		iosUrl:"https://apps.apple.com/mx/app/id1560016701",
		androidUrl:"https://play.google.com/store/apps/details?id=com.nibirusystem.quickzz",
	},
	{
		title:"DuckySaver - Control de Gastos",
		//description:"string",
		image:getStoragePath('src/portfolio/ducky.webp'),
		cover:true,
		iosUrl:"https://apps.apple.com/mx/app/id1565853561",
		androidUrl:"https://play.google.com/store/apps/details?id=com.nibirusystem.control_de_gastos",
	},
	{
		title:"Pigion Chat",
		//description:"string",
		image:getStoragePath('src/portfolio/pigion.webp'),
		cover:true,
		iosUrl:"https://apps.apple.com/app/id1573062365",
		androidUrl:"https://play.google.com/store/apps/details?id=com.gadbitmx.pigionchat",
	},
]
const CardProyects = (props:Proyect) => (
			<div className='transition-all flex flex-col rounded-lg shadow bg-white hover:shadow-lg' >
	<div className='relative h-44 sm:h-36 md:h-44 rounded-t-lg' >
			{props.image?
				<Image fill className={`bg-slate-100 rounded-t-lg ${props.cover?"object-cover":"object-contain"}`} src={props.image} alt={`Logo de ${props.title}`} title={`Logo de ${props.title}`} />
				:
				<div className='bg-slate-200 h-52 flex flex-1 items-center justify-center text-3xl' >
					<Icons name="image" />
				</div>
			}
		</div>
		<div className="flex flex-col flex-1 px-4 py-2 " >
			<h3 className='font-medium mb-4'  >{props.title}</h3>
			<ul className='mt-auto flex gap-4 justify-center flex-wrap text-2xl text-fiord-700' >
				
				{props.url &&
				<li>
					<Link target="_blank" title={`Pagina web ${props.title}`} href={props.url} >
						<Icons name='window' />
					</Link>
				</li>
				}
				{props.iosUrl &&
				<li>
					<Link target="_blank" title={`App iOS ${props.title}`} href={props.iosUrl} >
						<Icons name="apple" />
					</Link>
				</li>
				}
				{props.androidUrl &&
				<li>
					<Link target="_blank" title={`App Android ${props.title}`} href={props.androidUrl} >
						<Icons name="android2" />
					</Link>
				</li>
				}
				
			</ul>
			
		</div>
	</div>
)
const ProyectList = () => {
	return (
		
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
			{listado.map((obj,index)=> <CardProyects key={`${index}`} {...obj} /> )}
		</div>
	)
}

export default ProyectList