import Aluno from "../models/Aluno";
import Foto from "../models/Foto";

export async function create_student(req, res) {
  try {
    const student = await Aluno.create(req.body);
    const { password_hash, ...studentData } = student.get();
    return res.status(201).json(studentData);
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    return res.status(500).json({ erros: "Erro ao criar aluno", message: error?.message });
  }
}

export async function get_students(req, res){
  try {
    const students = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['created_at', 'DESC']],
      include: {
        model: Foto
      }
    });

    if(students.length === 0) {
      return res.status(404).json({ message: "Nenhum aluno encontrado" });
    }
    return res.status(200).json(students);
  } catch (error) {
    console.error("Erro ao obter aluno:", error);
    return res.status(500).json({ erros: "Erro ao obter aluno", message: error?.message });

  }
}

export async function get_student(req, res){
  try {
    const {id} = req.params;
    const student = await Aluno.findByPk(id, {
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      include: {
        model: Foto
      }
    })
    if (!student) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }
    return res.status(200).json(student)
  } catch (error) {
    console.error("Erro ao obter aluno:", error);
    return res.status(500).json({ erros: "Erro ao obter aluno", message: error?.message });
  }
}

export async function update_student(req, res){
  try {
    const student = await Aluno.findByPk(req.params.id);
    if(!student){
      return res.status(404).json({message: "Aluno não encontrado"});
    }
    const updatedStudent = await student.update(req.body);
    const { password_hash, ...studentData } = updatedStudent.get();
    return res.status(200).json(studentData);
  } catch (error) {
    console.error("Erro ao atualizar aluno:", error);
    return res.status(500).json({ erros: "Erro ao atualizar aluno", message: error?.message });
  }
}

export async function delete_student(req, res){
  try {
    const {id} = req.params;
    const student = await Aluno.findByPk(id);
    if(!student){
      return res.status(404).json({message: "Aluno não encontrado"});
    }

    await student.destroy();
    return res.status(200).json({message: "Aluno deletado com sucesso"});
  } catch (error) {
    console.log("Erro ao deletar aluno: ",error );
    return res.status(500).json({erros: "Erro ao deletar aluno", message: error?.message})
  }
}
