import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieparser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

const app= express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieparser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('server running on http://localhost:8080/');
});

const MONGO_URL = 'mongodb+srv://AbhinavS23:Newpassword123@cluster0.yv1hhsw.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(() => console.log("Connected to mongodb"));
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());