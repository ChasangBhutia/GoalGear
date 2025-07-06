const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        crypto.randomBytes(12, (err, bytes)=>{
            // create an unique name for uploaded image
            const fn = `${Date.now()}-${bytes.toString('hex')}${path.extname(file.originalname)}`
            cb(null, fn);
        })
    }
})

const upload = multer({storage:storage});

module.exports = upload;