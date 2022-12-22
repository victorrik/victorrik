import { apiFetch, sleep } from '@utils/funtions'

import React from 'react'

const fechPokemon = async() => { 
	try {
		return apiFetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")
	} catch (error) {
		return false
	}
 }

const PokmemonPage = async () => {
	const pokemons = await fechPokemon()
	return (
		<div>
			{pokemons && JSON.stringify(pokemons)}
		</div>
	)
}

export default PokmemonPage