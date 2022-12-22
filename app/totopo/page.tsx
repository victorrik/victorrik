import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<div className='flex flex-1 flex-col bg-white items-center' >
			<h1 className='font-medium text-2xl' >
				Seccion dedicada especial y exclusivamente a este hermoso ser y sus amigos
			</h1>
			<div className='relative w-72 h-72' >
				<Image alt='Imagen de totopo, un perro' fill src={"https://firebasestorage.googleapis.com/v0/b/victorrik-1.appspot.com/o/screensrc%2Ftotopo%2Feltotopomoderno.jpg?alt=media"} />
			</div>
		</div>
	)
}

export default page