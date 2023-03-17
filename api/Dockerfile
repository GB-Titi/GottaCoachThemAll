# Utilise une image Node.js de base
FROM node:latest

# Définit le répertoire de travail dans le container
WORKDIR /api

# Copie les fichiers de l'application dans le container
COPY . /api

# Installe les dépendances de l'application
RUN npm install

# Expose le port 3000
EXPOSE 3000

# Démarre l'application avec la commande npm start
CMD ["npm", "start"]