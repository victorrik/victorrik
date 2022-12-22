import React from 'react'

const DataPokemon = ({params}:any) => {
	const {id} = params
	return (
		<div>DataPokemon {id}</div>
	)
}

export default DataPokemon