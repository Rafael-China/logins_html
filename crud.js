function add() {

    var chave = Math.floor(Math.random() * 100 + 1);
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("mail").value;

    // alert(nome + '\n' + telefone + '\n' + email)

    var usuario = {

        nome_: nome,
        tel_: telefone,
        email_: email

    };

    // armazena os dados no local Storage do navegador

    localStorage.setItem(chave, JSON.stringify(usuario));

}

function listar() {

    var registros = document.getElementById("show");
    registros.innerHTML = '<table style="border: 1px solid #000; width:450px; background-color: #DDD;">' +
        '<tr>' +
        '<td> ID </td>' +
        '<td> NOME </td>' +
        '<td> TELEFONE </td>' +
        '<td> EMAIL </td>' +
        '<td> AÇÃO </td>' +
        '</tr>' +
        '</table>';

    // var id = localStorage.key(2);
    // var dados = localStorage.getItem(12);
    // var user = JSON.parse(dados);
    // alert(user.nome_);

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var user = JSON.parse(dados);

        // alert(user.nome_);

        // registros.innerHTML += "Nome: " + user.nome_ + "<br>";

        registros.innerHTML += '<table style="border: 1px solid #000; width:450px;">' +
            '<tr>' +
            '<td>' + id + '</td>' +
            '<td>' + user.nome_ + '</td>' +
            '<td>' + user.tel_ + '</td>' +
            '<td>' + user.email_ + '</td>' +
            '<td> <button onclick="excluir(\'' + id + '\')"> DELETE </button> </td>' +
            '</tr>' +
            '</table>';

    }

}

function excluir(del) {

    var ok = confirm("Tem certeza que deseja excluir este usuario?");
    if (ok) {

        localStorage.removeItem(del);
        listar();

    } else {

        return false;

    }

}

function check() {

    var cod = document.getElementById("id_alt").value;
    var reg = localStorage.getItem(cod);
    var user = JSON.parse(reg);

    if (reg == null) {

        alert("usuario nao existe");

    } else {

        document.getElementById("nome_alt").value = user.nome_;
        document.getElementById("telefone_alt").value = user.tel_;
        document.getElementById("mail_alt").value = user.email_;

    }

}

function Alterar() {

    var chave = document.getElementById("id_alt").value;
    var nome = document.getElementById("nome_alt").value;
    var telefone = document.getElementById("telefone_alt").value;
    var email = document.getElementById("mail_alt").value;

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let dados = localStorage.getItem(id);
        var user = JSON.parse(dados);

        if(id == chave){

            user.nome_ = nome;
            user.tel_ = telefone;
            user.email_ = email;

            localStorage.setItem(id, JSON.stringify(user));
            break;

        }

    }

}
