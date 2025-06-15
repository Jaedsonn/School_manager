import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";
import Aluno from "../models/Aluno";

const upload = multer(multerConfig).single("foto");

export async function uploadImage(req, res){
  return upload(req, res, async (err) => {
    if(err){
      return res.status(400).json({
        error: err.message || "An error occurred while uploading the file."
      })
    }
    if(!req.file){
      return res.status(400).json({
        error: "No file uploaded."
      });
    }

    const student = await Aluno.findOne({
      where: {id: req.params.id}
    });

    if(!student){
      return res.status(400).json("Aluno não existe")
    }

    const { originalname, filename } = req.file;
     const ft = await Foto.create({
      originalname,
      nome: filename,
      caminho: req.file.path,
      aluno_id: req.params.id
    }).catch(error => {
      return res.status(500).json({
        error: "Failed to save file information in the database.",
        details: error.message
      });
    })
    console.log(ft)
    return res.status(200).json({
      message: "File uploaded successfully.",
      file: req.file
    });
  })
}

export async function get_image_by_id(req, res) {
  const { id } = req.params;
  try {
    const foto = await Foto.findOne({
      where: {
        aluno_id: id,
        attribute: ['url']
      }
    });
    if (!foto) {
      return res.status(404).json({ error: "Image not found." });
    }
    return res.status(200).json(foto);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve image.", details: error.message });
  }
}
