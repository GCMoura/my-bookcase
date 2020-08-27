const express = require('express')
const cors = require('cors')
const server = express()
const router =  express.Router()
const fs = require('fs')
const {  v4  } = require('uuid')

server.use(express.json({extend: true}))
server.use(cors())

// Read user database
const readFile = () => {
    const content = fs.readFileSync('src/data/user.json', 'utf-8')
    return JSON.parse(content)
}

// Create User
const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('src/data/user.json', updateFile, 'utf-8')
}

// Verify user duplicity
const verifyData = (flag, db, data) => {   
    for(let i = 0; i < db.length; i++){
        if(db[i].name === data.name && db[i].password === data.password) {
            flag = true
        } 
    }
    return flag
}

//Return userId
const verifyId = (db, data) => {
    var userId;
    for(let i = 0; i < db.length; i++){
        if(db[i].name === data.name && db[i].password === data.password) {
            userId = db[i].id
        } 
    }
    return userId
}

//Read book db
const readBookDB = () => {
    const content = fs.readFileSync('src/data/db.json', 'utf-8')
    return JSON.parse(content)
}
// Create Book register
const writeBookDB = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('src/data/db.json', updateFile, 'utf-8')
}
// Verify book duplicity
const verifyBookData = (flag, db, data) => {   
    for(let i = 0; i < db.length; i++){
        if(db[i].title === data.title && db[i].author === data.author) {
            flag = true
        } 
    }
    return flag
}


// Read Database and return user id
router.post('/login', (req, res) => {
    const { name, password } = req.body
    const currentData = readFile()

    const userId = verifyId( currentData, {name, password})

    if(userId !== "") {
        res.send(userId)
    }
})

// Create User
router.post('/account', (req, res) => {
    const { name, password } = req.body
    const currentData = readFile()

    const id = v4()

    var flag = false

    const returnVerifyData = verifyData(flag, currentData, {name, password})

    if(returnVerifyData === false) {
        currentData.push({ id, name, password })
        writeFile(currentData)
        res.send({ id, name, password })
    } else {
        alert('Usuário já cadastrado')
    }
})

//Register book
router.post('/register/:id', (req, res) => {
    var { userId, title, author, genre, resume } = req.body
    const currentData = readBookDB()

    title = title.toLowerCase()
    author = author.toLowerCase()
    genre = genre.toLowerCase()

    var flag = false
   
    const returnVerifyBookData = verifyBookData(flag, currentData, { title, author, genre })

    if(returnVerifyBookData === false){
        currentData.push({ userId, title, author, genre, resume })
        writeBookDB(currentData)
        res.send({ userId, title, author, genre, resume })
    } else {
        alert('Livro já cadastrado')
    }
})


server.use(router)

server.listen(3333, () =>{
    console.log('Servidor rodando')
})


