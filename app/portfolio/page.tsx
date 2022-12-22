import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<main className='flex px-6 gap-10 h-screen bg-radical-red-500' >
			<aside >
				<div className='w-10 h-10' >
					<Image  src={'https://firebasestorage.googleapis.com/v0/b/victorrik-1.appspot.com/o/src%2Fprofile_512.jpg?alt=media'} alt={'Profile picture'} /> 
				</div>
			</aside>
			<section>

			</section>
		</main>
	)
}

export default page