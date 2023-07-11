# Redis con Node

### Crear una red

```sh
docker network create -d bridge redisnet
```

### Ejecutar Redis Container

```sh
docker run -d -p 6379:6379 --name myredis --network redisnet redis
```
