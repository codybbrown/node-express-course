const express = require('express')
const app = express()

const port = process.env.PORT || 8000

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }]

// API Endpoint: /users
app.get('/users', function (req, res) {
	res.json({
		success: true,
		message: 'successfully got users. Buenus.',
		users: mockUserData,
	})
})

app.get('/users/:id', function (req, res) {
	console.log(req.params.id)
	res.json({
		success: true,
		message: `got 1 user for ya here bubs`,
		user: req.params.id,
	})
})

app.listen(port, function () {
	console.log(`Server is running on ${port}`)
})
