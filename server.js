const express = require('express')
const app = express()

const port = process.env.PORT || 8000

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }]

app.get('/users', function (req, res) {
	res.json({
		success: true,
		message: 'successfully got users. Buenus.',
		users: mockUserData,
	})
})

app.listen(port, function () {
	console.log(`Server is running on ${port}`)
})
