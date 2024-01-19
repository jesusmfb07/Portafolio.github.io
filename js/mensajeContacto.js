function SendMail(){
    
    const fullname=document.getElementById("fullName").value,
    email_id=document.getElementById("email_id").value,
    message=document.getElementById("message").value;
    if(email_id!="" && fullname!="" && message!="" ){
        var params={
            from_name:fullname,
            email_id:email_id,
            message:message
        }

        let respuesta = document.getElementById("respuesta");
        respuesta.innerHTML =`
        <h1 class="enviado">Completado con exito<h1>
        `;
    }
    else{
        if(fullname==""){
            let fullnameAux=document.getElementById("fullName");
            fullnameAux.classList.add("marcoRojo");
        }
        if(email_id==""){
            let email_idAux=document.getElementById("email_id");
            email_idAux.classList.add("marcoRojo");
        }
        if(message==""){
            let messageAux=document.getElementById("message");
            messageAux.classList.add("marcoRojo");
        }
    }
}