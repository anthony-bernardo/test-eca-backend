// server.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3000

// Middleware
app.use(cors()) // allow requests from Angular frontend
app.use(bodyParser.json()) // parse JSON body

// Endpoint to save JSON
app.post('/api/save-json', (req, res) => {
	const data = req.body // JSON sent from Angular
	const filePath = path.join(__dirname, 'data.json')

	try {
		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
		res.status(200).json({ message: 'JSON saved successfully!' })
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Error saving JSON' })
	}
})

app.get('/api/get-json', (req, res) => {
	const filePath = path.join(__dirname, 'data.json')

	try {
		const data = fs.readFileSync(filePath, 'utf8')
		res.status(200).json(JSON.parse(data))
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Error reading JSON' })
	}
})

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
