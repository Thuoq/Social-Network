require('dotenv').config();
const cors = require('cors');
const app = require("express")();
const http = require('http').createServer(app);
const io  = module.exports.io =  require('socket.io')(http)
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const globalErrorHandler = require('./controllers/error.controller');
const socketManager = require('./socket/Socket.manager');
const PORT = process.env.PORT || 2565;

mongoose.connect(process.env.DB,{
  useNewUrlParser: true,
  userCreateIndex: true, 
  useFindAndModify: false 
}).then(() => {
  console.log("Database connected successfully")
});

app.use(cors())
app.options('*', cors())

 
app.use(bodyParser.urlencoded({ extended: false }))
const RouterUser = require("./routers/user.router");
  
// parse application/json
app.use(bodyParser.json()) 
app.use("/",RouterUser); 
app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server!`
  // });
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'failed';
  // err.statusCode = 404;
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
io.on("connection" , socketManager)
http.listen(PORT, () => {
    console.log("I am Running at PORT "  + PORT);
})  
 