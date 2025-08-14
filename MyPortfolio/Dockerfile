# Dockerfile image de base
FROM node:20-alpine

# Crée un dossier dans le conteneur
WORKDIR /app

RUN apk add --no-cache python3 make g++ \
	&& npm install -g npm@latest

# Copie les fichiers de l'hôte vers le conteneur
COPY package*.json ./
RUN npm install

# Copie tout le code
COPY . .

# Port exposé par vite
EXPOSE 5173

# Commande de lancement
CMD ["npm", "run", "dev", "--", "--host"]

