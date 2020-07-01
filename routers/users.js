const express = require('express')
const Users = require('../models/users')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new Users(req.body)

    const pattern = /\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if (!pattern.test(user.mobile_no)) {
        return res.status(400).send({error: 'Mobile Number is Invalid. Please provide complete number.'})
    }

    try {

        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send({error: 'Mobile Number already exist!'})
    }
})

router.get('/users', async (req, res) => {

    try {
        const user = await Users.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router