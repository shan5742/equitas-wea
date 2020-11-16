build:
	@echo "Building image from Dockerfiles..."
	docker-compose build
run:
	@echo "Starting application..."
	docker-compose up
down:
	@echo "Shutting down application..."
	docker-compose down

