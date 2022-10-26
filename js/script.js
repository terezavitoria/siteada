// Se os campos de nome e email estivervem preenchidos 
  // envie os dados
// senão
  //   peça ao usuário que preencha os campos nome e email

document.getElementById("button").addEventListener("click", validaForm)
function validaForm(){
  if(document.getElementById("nome-user").value != "" && document.getElementById("email-user").value != "" && document.getElementById("phone").value != "" ){
  alert("Prontinho! Você receberá as novidades por email.")
}else{
  alert(" Preencha os campos nome e email")
  } 
}

