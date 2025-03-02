require('dotenv').config()

const express=require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB=require('./server/config/db.js')
const session=require('express-session')
const passport=require('passport')
const MongoStore=require('connect-mongo')

const app=express();
const port=5000 || process.env.PORT;

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl:process.env.MONGODB_URI
    })
}));

app.use(passport.initialize());
app.use(passport.session())

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"))

connectDB();
//static files

app.use(express.static('public'));

//templating engine
app.use(expressLayouts)
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//routes
app.use('/',require('./server/routes/index.js'));
app.use('/',require('./server/routes/dashboard.js'));
app.use('/',require('./server/routes/auth.js'));

app.get('*',function(req,res){
    res.status(404).render('404')
})

app.listen(port, () =>{
    console.log('app listening on port '+port)
})
