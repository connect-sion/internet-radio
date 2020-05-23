# Connect-sion

Aplicación multicanal para realizar interpretaciones en la IDMJI

## Requirements

- Docker
- Docker composer
- butt
- npm (for debugging frontend)

## Usage

### Debugging

1. Run streaming server

```bash
docker-compose up --build icecast
```

2. Run frontend server

```bash
cd frontend
npm start
```

### General deployment

Run front and servers with docker-compose

```bash
docker-compose up --build
```

## License

[MIT](./LICENSE)
