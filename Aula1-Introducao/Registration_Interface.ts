/*
    Aqui no começo, temos uma função que deverá receber 2 informações :
        ° 1 - id (em formato String)
        ° 2 - Conta do GitHub (em formato String)
*/
function UserLogin(id : String, github_account : String) {
    console.log(id, github_account)
}

/*
    Aqui na Classe AdmLogin, usei uma função chamada 'Login()' para receber a função 'UserLogin()',
    que terá os dados imbutidos (referentes ao "usuário comum").
*/
class AdmLogin {
    Login() {
        UserLogin("CarlosViniMSouza", "https://github.com/CarlosViniMSouza")
    }
}

/*
    Aqui na Classe SuperAdmLogin, criei a função 'SuperLogin()' para receber 3 vezes o 'UserLogin()',
    cada um contendo informações de 3 organizações diferentes das quais participei.
*/
class SuperAdmLogin {
    SuperLogin() {
        UserLogin("Competição Num.1", "https://github.com/Eugenio-Hackathon-Equipe4/back-end-IoT")
        UserLogin("Competição Num.2", "https://github.com/Hacka-GIDEN")
        UserLogin("Competição Num.3", "https://github.com/Hackathon-Code-Stage-Edition2/Site_Projeto")
    }
}