.PHONY: help install build docker-build docker-run docker-stop docker-clean dev test lint format

IMAGE_NAME := private-starter-api
CONTAINER_NAME := api
PORT := 3000

help:
	@echo "Available commands:"
	@echo "  make install       - Install dependencies"
	@echo "  make build         - Build the application"
	@echo "  make dev           - Start development server"
	@echo "  make test          - Run tests"
	@echo "  make lint          - Run linter"
	@echo "  make format        - Format code"
	@echo "  make docker-build  - Build Docker image"
	@echo "  make docker-run    - Run Docker container"
	@echo "  make docker-stop   - Stop Docker container"
	@echo "  make docker-clean  - Remove Docker container and image"

install:
	npm install

build:
	npm run build

dev:
	npm run start:dev

test:
	npm test

lint:
	npm run lint

format:
	npm run format

docker-build:
	docker build -t $(IMAGE_NAME) .

docker-run:
	docker run -d --name $(CONTAINER_NAME) -p $(PORT):3000 $(IMAGE_NAME)

docker-stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

docker-clean: docker-stop
	docker rmi $(IMAGE_NAME) || true

docker-logs:
	docker logs -f $(CONTAINER_NAME)

docker-shell:
	docker exec -it $(CONTAINER_NAME) sh