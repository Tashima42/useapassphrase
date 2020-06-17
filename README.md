# Use A Passphrase

Esse site tem como objetivo gerar passphrases simples e incentivar 
o uso de passphrases aleatórias  em detrimento das senhas criadas por humanos.

# Versão Live
A versão mais atualizada pode ser encontrada em http://tashima42.github.io/useapassphrase-ptbr
porém, ela não possui conexão encripitada, então é recomendado utilizar
https://solucaut.com.br/pass

# Como Contribuir

O site precisa de muito trabalhao. Por favor contribua com qualquer uma das seguintes formas: .
* Melhorando a lista de palavras utilizadas, que está contida no arquivo `js/wordlist.js`
* Adicionando diferentes alternativas de senhas (e.g. four-word-with-space).

# Rodando Localmente

É necessário ter o grunt-cli (`npm install -g grunt-cli`), após isso você
roda `npm install` e `grunt`.
Se você tem o Docker & Docker Compose instalados, teoricamente você pode
apenas rodar `docker-compose up` para buildar o diretório /dist, que criará o arquivo
index.html, que é inteiramente self-contained (i.e. não se comunica externamente)
