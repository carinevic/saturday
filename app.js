let express = require('express')
let app = express()
let mongoose = require('mongoose');
let multer = require('multer');
let postsRouter = require('./routes/posts');
let callbackRequestsRouter = require('./routes/callback-requests');



mongoose.connect('mongodb://localhost/city', { useNewUrlParser: true });
app.use(express.json());
let imageStorage = multer.diskStorage({
    destination: (req, file, cb) =>(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

app.use(multer({storage: imageStorage}).single('imageFile'));
app.use(express.static('public'));


app.use('/posts', postsRouter);
app.use('/callback-requests', callbackRequestsRouter);



app.listen(3000,()=>{

})