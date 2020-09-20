const Mail = require('../lib/Mail');

module.exports = {
  async cadastro(req,res){
    const { email } = req.body;
    const adm = process.env.MAIL_ADMI;
    const site = process.env.MAIL_USER;
    await Mail.sendMail({
      from: `Site <${site}>`,
      to:`Administrador <${adm}>`,
      subject:'Cadastro Cliente',
      html:`<p>Um novo cadastro foi efetuado no site</p><h3>${email}</h3>`
    },function(error, info){
      if (error) {
        console.log(error);
        return res.json({"envio":"Algo deu errado, por favor tente novamente !"});
      } else { 
        return res.json({"envio":"Cadastro enviado com Sucesso!"});
      };
    });
  }
};