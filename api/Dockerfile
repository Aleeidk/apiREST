# Etapa de construcción
FROM node:20-alpine as builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Copiar desde la etapa de construcción
COPY --from=builder /app /app

# Variables de entorno
ENV MONGODB_URI=mongodb://mongodb:27017/miapi
ENV PORT=3000

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]