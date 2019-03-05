const express = require('express')
const app = express()
const hbs = require('hbs')
const fs = require('fs')
const port = 9000

app.set('view engine', 'hbs')

app.use( (req, res, next) => {
    // res.render('offline.hbs')
    next()
})

app.use( (req, res, next) => {
    let log = new Date()+', '+req.method+', '+req.url+'\n'
    fs.appendFileSync(__dirname + '/serverLog.txt', log)
    next()
})

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentYear', ()=> {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('page.hbs', {
        pageTitle: 'صفحه اصلی',
        pageBody: 'بدنه صفحه اصلی'
    })
})

app.get('/about', (req, res) => {
    res.render('page.hbs', {
        pageTitle: 'درباره ما',
        pageBody: 'بدنه درباره ما'
    })
})

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)})


module.exports.app = app