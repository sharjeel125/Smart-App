import express from 'express'
import cors from "cors"
import path from "path";

const app = express()
const __dirname = path.resolve();
const PORT = 5000
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
}))

app.use('/', express.static(path.join(__dirname, 'web/build')))
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})

app.post("/", (req, res) => {
    if (!req.body.field) {
        console.log("required field missing");
         res.send("required field missing");
          return;
    } else {
        // const bottle = 2.3
        const value= req.body.field
        console.log(value)
        // res.send(value)
        res.send("ok")
    }
})



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
