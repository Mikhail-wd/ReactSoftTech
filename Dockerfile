FROM node:18.15.0-alpine

EXPOSE 8000

WORKDIR /app

COPY package*.json  .

RUN npm install --legacy-peer-deps

COPY . .

# Сборка приложения
RUN npm run build

# Запуск приложения
CMD ["npm", "run", "preview"]