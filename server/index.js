import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
// import path from 'path';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/',(req, res) => {
  res.send('Hello Touri');
});

const CONNECTION_URL = 'mongodb+srv://ASAppointment:ASAppointment1234@cluster0.zpdwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app
.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));


// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     // Handle React routing, return all requests to React app
//     app.get('*', (req, res)=>{
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
//   }

mongoose.set('useFindAndModify', false);