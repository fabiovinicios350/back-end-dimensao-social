const Mail = require('../lib/Mail');

module.exports = {
  async enviarPedido(req,res){
    const { nome, email, usuario, whatzapp, pedido, produto, valor } = req.body;
    const adm = process.env.MAIL_ADMI;
    const site = process.env.MAIL_USER;

    Mail.sendMail({
      from: `Site Dimensão Social <${site}>`,
      to:`Administrador <${adm}>`,
      subject:`Novo Cadastro de Pedido`,
      html:`<h2>Pedido ${pedido}</h2><br><p>Foi cadastrado mais um pedido no site.</p><br><h3>Dados do Cliente</h3><p>Nome : ${nome}</p><p>Email : ${email}</p><p>Usuario Instagram : ${usuario}</p><p>WhatsApp : ${whatzapp}</p><br><h3>Dados da Compra</h3><p>Produto : ${produto}</p><p>Valor : ${valor}</p><br><p>Por favor acompanhar se o pagamento foi efetuado com sucesso.</p><br>`
    },function(error, info){
      if (!error) {
      } else { 
        console.log("Erro ao enviar o email para o.");
        console.log(error);
      };
    });

    Mail.sendMail({
      from: `Dimensão Social <${site}>`,
      to:`${nome} <${email}>`,
      subject:`Compra de 500 Seguidores`,
      html:`<h2>Pedido ${pedido}</h2><br><p>Seu pedido ja foi cadastrado com sucesso em nosso banco de dados. Estamos aguardando a confirmacao do pagamento para dar continuidade no processo.</p><p>Lembrando que todos os nossos serviços tem garantia, e você pode cancelar por qualquer motivo em até 7 dias depois do pagamento, que faremos o reembolso na hora.</p><br><h3>Dados da Compra</h3><p>Usuario : ${usuario}</p><p>Produto : ${produto}</p><p>Valor : ${valor}</p><br><p>Agradecemos pela confiança, e estamos anciosos para ver os resultados :)</p><br><br><p>Se tiver alguma duvida entre em contato conosco.</p><p>Atendente : Kelvin</p><p>WhatSapp : (11) 99287-1426</p>`
    },function(error, info){
      if (!error) {
      }else {
        console.log("Erro ao enviar o email para o cliente.");
        console.log(error); 
      };
    });
      
    return res.json({"envio":"Cadastro enviado com Sucesso!"});

  }
};