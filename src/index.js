
import express from 'express'
import mongoose from "mongoose"
import {config} from "dotenv"
config()
const app = express()

const port = process.env.PORT || 3000

try {
    await mongoose.connect(process.env.MONGO_HOST)
    console.log(`DB connected`)
} catch (error) {
    console.log(`DB faild`)
}

const userSchemaa = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchemaa)


app.get('/', async (req, res) => {

    const newUser = new User({
        name: "manar",
        email: "manag@gmail.com",
        password: "1234"
    })
    await newUser.save()
    res.json({ message: "Hello world from manar", newUser })
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})