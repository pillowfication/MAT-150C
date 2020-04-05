const path = require('path')
const express = require('express')

const PORT = process.argv[2] || 3000
const INDEX_PATH = path.resolve('./dist/index.html')

const app = express()

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', (_, response) => {
  response.sendFile(INDEX_PATH)
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
