const express = require('express')
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
mongoose.connect("mongodb+srv://snehangl2004:Sneha%40122004@cluster0.6nowclk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('mongoose connected successfully')).catch((err)=>console.log(err))
app.set("views", "./view")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000)