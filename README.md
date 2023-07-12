# Redis con Node

### Ejecutar el servidor de desarrollo

```sh
npm run dev
```

### Crear una red

```sh
docker network create -d bridge redisnet
```

### Ejecutar Redis Container

```sh
# Sin Red
docker run -d -p 6379:6379 --name myredis redis

# Con Red
docker run -d -p 6379:6379 --name myredis --network redisnet redis
```

### Ejecutar Redis-Commander

Este permite ver la base de datos de Redis

```sh
# Instalar el paquete global
npm list -g redis-commander

# Ejecutar en un puerto definido
redis-commander --port 9000
```
