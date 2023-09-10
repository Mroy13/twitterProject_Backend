import express from 'express';
import routes from './routes/index.js';
import {ServerConfig} from './config/server-config.js';
 

 const app=express();
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use('/api',routes);
 app.listen(ServerConfig.PORT,async()=>{
   console.log(`server is up at port no ${ServerConfig.PORT}`);
 })
