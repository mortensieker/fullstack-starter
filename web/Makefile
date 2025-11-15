.PHONY: help install build docker-build docker-run docker-stop docker-clean dev preview check lint format test

IMAGE_NAME := private-starter-web
CONTAINER_NAME := web
PORT := 3001

help:
	@echo "Available commands:"
	@echo "  make install       - Install dependencies"
	@echo "  make build         - Build the application"
	@echo "  make dev           - Start development server"
	@echo "  make preview       - Preview production build"
	@echo "  make check         - Run svelte-check"
	@echo "  make lint          - Run ESLint"
	@echo "  make format        - Format code with Prettier"
	@echo "  make test          - Run tests"
	@echo "  make docker-build  - Build Docker image"
	@echo "  make docker-run    - Run Docker container (port 3001)"
	@echo "  make docker-stop   - Stop Docker container"
	@echo "  make docker-clean  - Remove Docker container and image"

install:
	npm install

build:
	npm run build

dev:
	npm run dev

preview:
	npm run preview

check:
	npm run check

lint:
	npm run lint

format:
	npm run format

test:
	npm test

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
