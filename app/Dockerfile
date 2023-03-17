# Utilise une image Node.js de base
FROM node:latest

# Définit le répertoire de travail dans le container
WORKDIR /app

# Copie les fichiers de l'application dans le container
COPY . /app

# Installe les dépendances de l'application
RUN npm install

# Installe Expo globalement
RUN npm install -g expo-cli

# Expose le port 19000 pour Expo
EXPOSE 19000

# Expose le port 19001 pour le débogage Expo
EXPOSE 19001

# Démarre l'application avec la commande expo start
CMD ["expo", "start"]