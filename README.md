# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Dizzy.webp" alt="Dizzy" width="25" height="25" /> Drip-Store Backend | eCommerce

![img](https://img.shields.io/github/license/DevSaLLein/drip-store-backend.svg)
![img](https://img.shields.io/github/release/DevSaLLein/drip-store-backend.svg)
![img](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png" alt="Face with Monocle" width="25" height="25" /> O que é o Drip-Store Backend?

O Drip-Store Backend é a API RESTful do eCommerce DripStore, desenvolvida em Node.js com Express, que gerencia as operações do servidor, comunicação com o banco de dados e fornece endpoints para o frontend consumir. Este projeto faz parte da imersão Full-Stack do programa [Geração Tech](https://geracaotech.iel-ce.org.br), oferecendo suporte para funcionalidades como autenticação de usuários, gerenciamento de produtos, pedidos e integrações de pagamento.

<div>

<img src="https://github.com/user-attachments/assets/4f5ecc97-e58c-4edd-abe7-b662d9e06801" width="49%"/>
<img src="https://github.com/user-attachments/assets/20364e3a-1218-483c-8765-ff8aa74f4fb5" width="49%"/>
<img src="https://github.com/user-attachments/assets/df9d0978-36b2-4d7f-878d-0899bbc7bd2b" width="100%"/>

</div>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Rocket.webp" alt="Rocket" width="25" height="25" /> Iniciar

1.  Instalar a última versão LTS do [Node.js](https://nodejs.org).
2.  Checar a instalação com os comandos: `node -v` e `npm -v`.
3.  Clonar este repositório com:
    ```bash
    git clone https://github.com/http-sallein/drip-store-api.git
    ```
4.  Acesse o diretório do projeto:
    ```bash
    cd drip-api
    ```
5.  Instale as dependências do projeto com:
    ```bash
    npm install
    ```
6.  Configure as variáveis de ambiente no arquivo `.env` (verifique o arquivo `.env.example` para o modelo).
7.  Inicie o servidor:
    ```bash
    npm run start
    ```
8.  A API estará rodando em `http://localhost:3000`.

## ![Tecnologias Utilizadas Icon](https://img.icons8.com/color/48/000000/gear.png) Tecnologias Utilizadas



| ![Node.js Icon](https://img.icons8.com/color/48/000000/nodejs.png) <br> **Node.js** | ![Express.js Icon](https://img.icons8.com/ios/50/000000/express-js.png) <br> **Express.js** | ![GitHub Icon](https://img.icons8.com/nolan/64/github.png) <br> **GitHub** | ![JavaScript Icon](https://img.icons8.com/color/48/000000/javascript.png) <br> **JavaScript** | ![Git Icon](https://img.icons8.com/color/48/000000/git.png) <br> **Git**| ![Supertest Icon](https://img.icons8.com/color/48/000000/api.png) <br> **Supertest** |
| :---------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |

 













## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Card%20Index%20Dividers.webp" alt="Card Index Dividers" width="25" height="25" /> Organização de Pastas

<details>
    <summary><strong>Arquitetura</strong></summary><br>
  
  ```
├──Drip-api/
|
|  ├── src/
|  │ ├── vs_code
|  │    ├── settings.json
|  │
|  ├── public/
|  │ ├── createDatabase.js
|  │ ├── createTables.js
|  │
|  |
|  │ ├── config/
|  |    ├──context.js
|  |    ├──config.js
|  |
|  │ ├── controllers/
|  |    ├──userController.js
|  |    ├──productController.js
|  |    ├──categoryController.js
|  |
|  | ├── enums/
|  |    ├──optionsProductEnum.js
|  | 
|  │ ├── middleware/
|  |    ├──passwordEncryption.js
|  |    ├──passwordDecrypt.js
|  |    ├──createJwtToken.js
|  |    ├──authenticateToken.js
|  |    
|  |
|  | ├── models/
|  |    ├──user.js
|  |    ├──productsCategory.js
|  |    ├──product.js
|  |    ├──optionsProduct.js
|  |    ├──imagesProduct.js
|  |    ├──category.js
|  |
|  | ├── routes/
|  |    ├── userRoute.js
|  |    ├── productRoute.js
|  |    ├── categoryRoute.js
|  |
|  | ├── services/
|  |    ├── service.js
|  |
|  ├── app.js
|  |
|  ├── server.js
|  |
|  ├── .env
|  |
|  ├── package-lock.json
|  |
|  ├── package.json
|  |
|  ├── README.md 
  
```
</details>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Flags/Flag%20Brazil.webp" alt="Flag Brazil" width="25" height="25" /> Membros ativos do projeto

|                                               Profile                                                |       Nome Completo        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------: | :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     [<img src="https://github.com/http-sallein.png" height="90px">](https://github.com/http-sallein)     |   Isaac Lima de Andrade    |                                                                                                           <div> [<img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/DevSaLLein) <br/> [<img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/devsallein) <br/> [<img src="https://img.shields.io/badge/-Instagram-hotpink?style=for-the-badge&logo=instagram&logoColor=white"/>](https://www.instagram.com/http.zaclimaaxs/) </div>                                                                                                            |
| [<img src="https://github.com/LucasMarcelo85.png" height="90px">](https://github.com/LucasMarcelo85) |   Lucas Marcelo N Souza    | <div > <a href="https://dev-marcelo.vercel.app/" target="_blank"><img alt="" src="https://img.shields.io/badge/Portfolio-000?logo=vercel&logoColor=yellow&style=for-the-badge" style="vertical-align:center" width="120" /></a> <br> [<img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white" align="center" width="120"/>](https://github.com/LucasMarcelo85) <br> <a href="https://www.linkedin.com/in/marcelo-souza-882aab316" target="_blank" align="center" width="120"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" align="center" width="120"></a> </div> |
|   [<img src="https://github.com/MatheusDeV55.png" height="90px">](https://github.com/MatheusDeV55)   | Matheus Gabriel R de Paula |                                                                                                                                                                                                                                                                                   [<img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/MatheusDeV55)                                                                                                                                                                                                                                                                                    |

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Open%20Hands.png" alt="Smiling Face with Open Hands" width="25" height="25" /> Menções Honrosas

|                                                   Profile                                                    |    Nome Completo     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :----------------------------------------------------------------------------------------------------------: | :------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://github.com/prof-marneicardoso.png" height="90px">](https://github.com/prof-marneicardoso) | Prof° Marnei Cardoso | <div> [<img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/prof-marneicardoso) <br/> [<img src="https://img.shields.io/badge/-Youtube-red?style=for-the-badge&logo=youtube&logoColor=white" />](https://www.youtube.com/@MarneiCardosoProf) <br> [<img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/marneicardoso) </div> |
|          [<img src="https://github.com/Samkuran.png" height="90px">](https://github.com/DevSaLLein)          |  Samantha Pimentel   |                                                                                <div> [<img src="https://img.shields.io/badge/-GitHub-black?style=for-the-badge&logo=github&logoColor=white"/>](https://github.com/Samkuran) <br/> [<img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/samantha-pimentel-dev) </div>                                                                                |

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Memo.webp" alt="Memo" width="25" height="25" /> Licença

-   Esse projeto está sob a licença [The Unlicense](./LICENSE.txt).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Activity/Artist%20Palette.webp" alt="Artist Palette" width="25" height="25" /> Layout

-   Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Revolving%20Hearts.png" alt="Revolving Hearts" width="25" height="25" /> Agracimentos <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Kissing%20Cat.png" alt="Kissing Cat" width="25" height="25" />

<img src="https://github.com/user-attachments/assets/bbf2fc2c-29b6-47fa-a79b-67fb079095a9" width="160"/>
<img src="https://github.com/user-attachments/assets/8f1ba22b-24a3-42af-bf41-455c1bddcd75" width="160"/>
<img src="https://github.com/user-attachments/assets/0d54fd75-a5d4-410c-91b4-b999a81dcf06" width="160"/>
<img src="https://github.com/user-attachments/assets/2efa1aa7-b17f-4e2e-944f-c6987c35905e" width="160"/>
<img src="https://github.com/user-attachments/assets/021d7045-916b-4a39-969f-2f8073d4488f" width="160"/>
