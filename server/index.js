const cors = require('cors')
const express = require('express');
const Router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors())
app.use("/",Router)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})