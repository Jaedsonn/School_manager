import multer from "multer";
import {extname, resolve} from "path";

const random = () => {
  return Math.floor(Math.random() * 1000000 + 100000);
}

export default {
  fileFilter: (req, file, cb) =>{
    const alowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp"
    ];
    if(alowedTypes.includes(file.mimetype)){
      cb(null, true);
    } else{
      cb(new Error("Invalid file type. Only images are allowed."), false);
    }
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve("uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    }
  })
}
