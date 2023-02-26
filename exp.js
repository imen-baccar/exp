import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/router.js';
dotenv.config();
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/' , router)












const PORT = process.env.PORT || 8000
app.listen(PORT , (err) => err ? console.error(err) : console.log(`app running on port : http://localhost:${PORT}`))












