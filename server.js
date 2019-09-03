const express = require('express')
const server = express()

let actors = [
    {
        id: 1,
        name: 'Elijah Wood',
        movies: [1,2]
    },
    {
        id: 2,
        name: 'Chris Evans',
        movies: [4]
    }
]

let movies = [
    {
        id: 1,
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5
    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4
    },
    {
        id: 3,
        name: "The Children of Hurin",
        released: false,
        rating: null
    },
    {
        id: 4,
        name: "Avenger Endgame",
        released: true,
        rating: 5
    }
]

server.get('/', (req, res) => {
    res.status(200).json({message: 'Server Running'})
})

server.get('/api/movies', (req, res) => {
    // movies.filter(movie => movie.released FOR ONLY RELEASED
    res.status(200).json(movies)
})

// as user of this api, I want and endpoint to see a list of actors, so that I can see all the actors

module.exports = server;