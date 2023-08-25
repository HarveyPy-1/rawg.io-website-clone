import React, { useEffect, useState } from 'react'
import apiClients from '../services/api-clients'
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

// The interface is based on what the api doc says the response will look like
interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        // <FetchGamesResponse> remember, is necessary for autocomplete purposes.
        apiClients.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    })
  return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
}

export default GameGrid