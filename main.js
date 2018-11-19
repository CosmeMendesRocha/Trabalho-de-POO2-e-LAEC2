class Cadastrar_Usuario{
	constructor(nome,cpf,email,senha1,senha2){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
		this.senha1 = senha1;
		this.senha2 = senha2;
	}
}
function CadastroUsuario(){
	var nome = document.getElementById('nome_cadastro').value;
	var email = document.getElementById('email_cadastro').value;
    var cpf = document.getElementById('cpf_cadastro').value;
    var senha1 = document.getElementById('senha1_cadastro').value;
    var senha2 = document.getElementById('senha2_cadastro').value;

	if (nome,email,cpf,senha1,senha2 == '') {
		alert('Campos vazios !!! preencha');
    }
    else{
		var cadastro = new Cadastrar_Usuario(nome,cpf,email,senha1,senha2);
		cadastros_login.salvar_cadastro_login(cadastro);
        location.reload();
        
    }
}
class banco_Usuario{
	constructor(indentificacao_banco){
		this.indentificacao_banco = indentificacao_banco;
		this.database = JSON.parse(localStorage.getItem(this.indentificacao_banco)) || [];
	}
	salvar_cadastro_login(cadastro){
		this.database.push(cadastro);
		localStorage.setItem(this.indentificacao_banco , JSON.stringify(this.database));
		alert('Salvo com sucesso');
		
	}
}
var cadastros_login = new banco_Usuario('CadastroUsuario');

