# Use uma imagem base do Node.js
FROM node:22

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package.json yarn.lock ./

# Instale as dependências
RUN yarn install

# Copie o restante do código para o container
COPY . .

# Exponha a porta usada pelo backend
EXPOSE 3000

# Comando para iniciar o backend
CMD ["npx", "ts-node", "app.ts"]
