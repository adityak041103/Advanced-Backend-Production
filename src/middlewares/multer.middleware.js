import multer from "multer";

// took it from the web expressjsmulter from diskStorage section
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({ 
    storage,
})