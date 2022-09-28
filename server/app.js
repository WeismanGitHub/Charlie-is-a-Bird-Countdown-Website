const express = require('express')
const path = require('path')

require('express-async-errors')
require("dotenv").config()

const app = express()

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get('/image', (req, res) => {
    if (new Date() >= new Date('10/13/2022 00:00 AM') ) {
        res.status(200).sendFile(path.resolve(__dirname, './secret_image.png'))
    } else {
        res.status(403).send("Don't try to be sneaky. Bitch.")
    }
})

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/build') })
})

try {
    const port = process.env.PORT || 5000
    app.listen(port, console.log(`Listening on port ${port}...`))
} catch (err) {
    console.error(err)
}