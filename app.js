import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{

    console.log(`App is listening at port ${PORT} `)
})


app.get("/",(req,res)=>{
    res.send(`
        <h1>Welcome to Github Page.</h1>`
    )
});