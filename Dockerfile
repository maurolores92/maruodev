FROM node:18-alpine AS builder
WORKDIR /app

# copy package files and install
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit --progress=false

# copy all sources and build
COPY . .
RUN npm run build

FROM nginx:alpine

# Copy built site
COPY --from=builder /app/dist /usr/share/nginx/html

# Use our nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias y construir
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye el proyecto Astro
RUN npm run build

# Etapa 2: Servir archivos estáticos
FROM node:18-alpine AS runner

WORKDIR /app

# Instala 'serve' para servir el contenido estático
RUN npm install -g serve

# Copia solo los archivos generados en la build
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]