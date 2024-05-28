
# 🚀 Projeto: Página de Agradecimento
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white)![](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
<img title="a Node" alt="Banner NodeJs" src="./docs/images/banner.png"
style="max-width: 600px">   

## 🌐 Visão Geral

Olá a todos, sejam muito bem vindos ao projeto **Alura Challenge - encoder/decoder**. Aqui você encontra um programa de [de]codificação de mensagens, ideal para compartilhar informações e conversar com os amigos(as). Eae, achou interessante? Vem conhecer!

## 📋 Funcionalidades
A funcionalidade básica desse projeto fazer o *encoder/decoder* de mensagens de texto. Para isso, o usuário entra com uma mensagem e escolhe por meio de botões se quer codificar ou decodificar, e por fim aparece o resultado em um modal, onde é possível realizar a cópia para área de transferência.

Também o projeto conta um um `dark theme` feito utilizando as classes utilitárias do tailwind, que detecta o tema configurado como padrão do navegador. O uso dessa classe é similar as demais do tailwind, podendo aninhar classes e modificadores trazendo um resultado bem rico e tudo direto no html.

- Layout responsivo para diferentes tamanhos de tela;
- Página genérica de redirecionamento de formulário.

##  Técnicas e tecnologias utilizadas
A estilização base foi pensada primeiro no mobile por se tratar de um break point menor é mais assertivo.
  
Em javascript houve a delegação de tarefas para cada arquivo, isso serve para deixar o código mais funcional e melhorar na manutenção.

Os arquivos ficaram com mais linhas do que necesssário pois o objetivo é deixar o código legível e menos suceptível a erros nas regras de negócio.

Quero deixar um adendo aqui para o arquivo `modify-attributes-svg.js`. Ele foi pensado unicamente melhorar o processo de codificação e deixar menos *poluido* a área de trabalho.

## 📁 Clonar repositório

Clone este repositório via Bash, usando:

✅ HTTPS:

```bash
git clone https://github.com/SamColt36/alura-challenge-encoder-decoder
```

✅ SSH:

```bash
git clone git@github.com:SamColt36/alura-challenge-encoder-decoder
```

✅ GitHub CLI:

```bash
gh repo clone SamColt36/alura-challenge-encoder-decoder
```

✅ Download ZIP.

## 📶 Status

O projeto encontra-se em:

> Finalizado

## 🌐 Acessar o projeto

Acesse a última versão disponível pelo [link](https://alura-challenge-encoder-decoder.vercel.app/)🔗.

## 📂 Estrutura de diretórios

Foi pensada uma estrutura que segue o seguinte diagrama. Os arquivos compilados por padrão vão para o diretório `docs/`.

    -docs/
    ---images/
    -src/
    ---pages/
    ---styles/
    ---scripts/
    -*.config.js
    -README.md
    -LICENSE
    -.gitignore

## 🔧 Instalação

O projeto utiliza o _webpack_ como empacotador de códigos. O _Webpack_ nada mais é do que um empacotador de módulos/códigos. Seu grande diferencial é que ele foi criado para juntar arquivos de JavaScript que são utilizados dentro de um navegador. Sua principal utilidade é para projetos voltados para web focados em módulos de sua aplicação.

Para fazer a instalação das dependências usadas nesse projeto, tais como: _webpack_ e o _tailwindcss_, é necessário ter o NodeJS instalado. Até a data atual, esse último pode ser obtido através do link:

> [Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download)

<img title="a Node" alt="Banner NodeJs" src="./docs/images/node-banner.png"
style="max-width: 600px">

Para obter as referências das dependências usadas o arquivo _package.json_ pode ser usado, e para mais detalhes use o _package-lock.json_, ambos na raiz do projeto.

_Foi usada a sintaxe do CJS nos quando aos arquivos de configuração._

## 🛠️ Abrir e rodar

Após as devidas instalações e configurações presentes nos arquivos `*.config.js`, caso queira alterar o projeto é necessário recompilar os arquivos para gerar uma nova saída (por _default_ no diretório `docs/`). Pensando nisso, o arquivo _package.json_ conta com dois _scripts_:

```json
"scripts": {
	"build": "webpack --config webpack.config.js",
	"watch": "webpack --watch"
},
```

- **build**: Apenas compila e gera as saídas
- **watch**: Assiste as mudanças no código e compila.

Por fim e não menos importante, rode no terminal um desses dois _scripts_ usando:

```bash
$ npm run build
```

ou

```bash
$ npm run watch
```

## 👥 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE ou acesse [MIT License (mit-license.org)](https://mit-license.org/) para obter detalhes.
