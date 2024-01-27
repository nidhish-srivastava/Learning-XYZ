import express from 'express'
import cookieParser from 'cookie-parser'
import mysql from 'mysql'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lamadev123",
    database: "test",
});

app.get("/", (req, res) => {
    res.json("hello");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post('/books', (req, res) => {
    const { title, price, desc, cover } = req.body
    const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES (?) "
    const values = [title, price, desc, cover]
    db.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const { title, price, desc } = req.body
    const q = "UPDATE books SET `title`=?,`desc`=?,`price`=? WHERE id = ?"
    const values = [title, price, desc]
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    })
})

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM books WHERE id=?"

    db.query(q, [bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    })
})



app.listen(4000, () => {
    console.log("Connected");
})