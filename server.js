const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

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

// words with colon in front in url are used to indicate a variable and can be accessed with req.params.variable
app.get('/users/:id', function (req, res) {
	console.log(req.params.id)
	res.json({
		success: true,
		message: `got 1 user for ya here bubs`,
		user: req.params.id,
	})
})

app.post('/login', function (req, res) {
	// Passwords are encrypted using something like bcrypt before being sent to the server
	const username = req.body.username
	const password = req.body.password

	// Will come from database
	const mockUserName = 'Boffin'
	const mockPassword = 'rim-explorer'

	if (username === mockUserName && password === mockPassword) {
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'You are logged in',
			token: 'encryptid token goes here',
		})
	} else {
		res.json({
			success: false,
			message: 'Password an uname no not match',
		})
	}
})

app.listen(port, function () {
	console.log(`Server is running on ${port}`)
})
