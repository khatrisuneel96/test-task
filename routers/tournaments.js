const express = require('express')
const Tournaments = require('../models/tournaments')


const router = new express.Router()

router.post('/tournaments', async (req, res) => {
    const tournament = new Tournaments({
        ...req.body
    })
    try {
        await tournament.save()
        res.status(201).send(tournament)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tournaments', async (req, res) => {

    try {
        const tournament = await Tournaments.find({})
        res.send(tournament)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router