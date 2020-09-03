const express = require('express')
const cors = require('cors')
const server = express()
const router =  express.Router()
const fs = require('fs')
const {  v4  } = require('uuid')
const bcrypt = require('bcrypt')

server.use(express.json({extend: true}))
server.use(cors())

// Read user database
const readFile = () => {
    const content = fs.readFileSync('src/data/db.json', 'utf-8')
    return JSON.parse(content)
}

// Create User
const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('src/data/db.json', updateFile, 'utf-8')
}

// Verify user duplicity
const verifyData = (flag, db, data) => {   
    for(let i = 0; i < db.length; i++){
        if(db[i].name === data.name) {
            flag = true
        } 
    }
    return flag
}

//Return userId
const verifyId = async (db, data) => {
    var userId;
    for(let i = 0; i < db.length; i++){
        const compareId = await bcrypt.compare(data.password, db[i].password)
        if(db[i].name === data.name && compareId === true) {
            userId = db[i].id
        } 
    }
    return userId
}

// Verify book duplicity
const verifyBookData = (flag, book, data) => {   
    for(let i = 0; i < book.length; i++){
        if(book[i].title === data.title && book[i].author === data.author){
            flag = true
        }
    }
    return flag
}

// Read Database and return user id
router.post('/login', async (req, res) => {
    const { name, password } = req.body
    const currentData = readFile()

    const userId = await verifyId( currentData, {name, password})
    if(userId !== "") {
        res.send(userId)
    }
})

// Create User
router.post('/account', async (req, res) => {
    var { name, password } = req.body
    const currentData = readFile()

    const id = v4()

    const hash = await bcrypt.hash(password, 10)
    password = hash

    var book = []

    var flag = false

    const returnVerifyData = verifyData(flag, currentData, {name})

    if(returnVerifyData === false) {
        currentData.push({ id, name, password, book })

        writeFile(currentData)

        res.send({ id })
    } else {
        res.send()
    }
})

//Register book
router.put('/register/:id', (req, res) => {
    var { userId, title, author, genre, cover, note } = req.body
    const currentData = readFile()

    title = title.toLowerCase()
    author = author.toLowerCase()
    genre = genre.toLowerCase()

    var flag = false

    const selectedUser = currentData.findIndex(user => user.id === userId)

    var { id, name, password, book } = currentData[selectedUser]

    const returnVerifyBookData = verifyBookData(flag, book, { title, author })   

    if(returnVerifyBookData === false){
        const update = {
            title, 
            author, 
            genre, 
            cover,
            note
        }
        book.push(update)
        currentData[selectedUser] = {
            id,
            name,
            password,
            book
        }
        writeFile(currentData)
        res.send({ userId })
    } else {
        res.send()
    }
})

router.get('/bookcase/:id', (req, res) => {
    const { id } = req.params
    const currentData = readFile()

    const selectedUser = currentData.findIndex(user => user.id === id)

    var { book } = currentData[selectedUser]

    res.send(book)
})

router.delete('/bookcase/:id/:title/:author', (req, res) =>{
    const { id, title, author } = req.params
    const currentData = readFile()
    
    const selectedUser = currentData.findIndex(user => user.id === id)

    var { book } = currentData[selectedUser]

    const selectedBook = book.findIndex(book => book.title === title && book.author === author)

    book.splice(selectedBook, 1)

    writeFile(currentData)

    res.send(true)
})

server.use(router)

server.listen(3333, () =>{
    console.log('Servidor rodando')
})


