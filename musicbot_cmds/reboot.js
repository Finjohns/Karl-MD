const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"😤"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝗞𝗔𝗥𝗟 𝗠𝗗 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠....🫨");

  exec("pm2 restart all");
  

  



})
