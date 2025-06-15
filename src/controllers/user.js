import User from "../models/User";
import bcrypt from "bcryptjs";

export async  function create_user(req, res, ){
  try {
    const user =  await User.create({
      username: req.body.username || "",
      email: req.body.email || "",
      password: req.body.password || "",
    })
    const {password ,...userWithoutPassword} = user.dataValues
    console.log(userWithoutPassword);
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    return res.status(500).json({ error: "Erro ao criar aluno", message: error?.message });
  }
}

// login route
export async function get_user(req, res, next) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if(!user){
      return res.status(404).json({ error: "User not found" });
    };

    const isPasswordValid = await bcrypt.compare(req.body.password, user.dataValues.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }
    req.body = {
      email: user.dataValues.email,
      password: req.body.password,
    }
    next();
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    return res.status(500).json({ error: "Erro ao obter usuários", message: error?.message });
  }
}



export async function update_user(req, res){
  try {
    const updata = req.body;
    const user = await User.findOne({
      where:{
        email: updata.user_email
      }
    })


    if(!user){
      return res.status(404).json({"Must be logged in to access this resource": "User not found"});
    }

    await User.update({
      username: updata.username ? updata.username : user.username,
      email: updata.email ? updata.email : user.email,
      password: updata.password ? updata.password : user.password,
    }, {
      where: {
        id: user.dataValues.id
      },
    });

    return res.status(200).json({ message: "Usuário atualizado com sucesso"});
  } catch (error) {
    console.log("ERRO AO ATUALIZAR USUÁRIO", error);
    return res.status(500).json({ error: "Erro ao atualizar usuário", message: error?.message });
  }
}

export async function delete_user(req, res){
try {
  const user = await User.findOne({where: {email: req.body.user_email}})

  if(!user){
    return res.status(404).json({"Must be logged in to access this resource": "User not found"});
  }

  User.destroy({
    where: {
      id: req.params.id
    }
  });
  return res.status(200).json({ message: "Usuário deletado com sucesso" });
} catch (error) {
  console.error("Erro ao deletar usuário:", error);
  return res.status(500).json({ error: "Erro ao deletar usuário"});
}
}
