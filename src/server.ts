import 'dotenv/config'
import express, {Express} from 'express';
import cors from "cors";
import {routesRouter} from './app/routes';

process.env.ROOT_FOLDER = __dirname;

const app: Express = express();

app.use(cors())

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(routesRouter)

// set the port on which our app wil run
// important to read from environment variable if deploying
const port = process.env.PORT || 3001 

app.listen(port, () => {
    console.log(`Started server on PORT ${port} at ${new Date().toString()}`);
});