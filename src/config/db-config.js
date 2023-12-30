import mongoose from "mongoose";
import { ServerConfig } from './server-config.js';
export async function connect(){
    await mongoose.connect(ServerConfig.ConnectUri);
}
