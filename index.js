document.addEventListener("DOMContentLoaded", () => {
    let submitbutton = document.getElementById("send")

    const CPFinput = document.getElementById("CPF");

    CPFinput.addEventListener("input", CPFchecker);


    function submit(event) {

        event.preventDefault();

        let NameElement = document.getElementById("Name").value;
        let EmailElement = document.getElementById("Email").value;
        let CpfElement = document.getElementById("CPF").value;



        let EmailPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]*@[a-zA-Z0-9]+[\.[a-zA-Z]{2,}]*\.[a-zA-Z]{2,}$/;

        if (!EmailPattern.test(EmailElement)) {
            console.log("Invalid E-mail format:", EmailElement);
            alert("Formato de email invalido");
            return
        }
        else if (CpfElement.length < 14) {
            console.log("size of cpf not enought:", CpfElement);
            alert("cpf muito curto");
        } else {
           
                console.log("Valid E-mail format:", EmailElement);
                console.log("Name value:", NameElement);
                console.log("Cpf value:", CpfElement);
            
        }
    }



        function CPFchecker(event) {
            let cpf = CPFinput.value.replace(/\D/g, "");

            if (cpf.length > 11) {
                cpf = cpf.slice(0, 11);
            }

            if (cpf.length > 9) {
                cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
            }

            else if (cpf.length > 6) {
                cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
            }

            else if (cpf.length > 3) {
                cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
            }

            CPFinput.value = cpf;
        }




        submitbutton.addEventListener("click", submit)

    });