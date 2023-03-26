CONTAINER=web
up: 
    docker-compose up --build --remove-orphans

daemon:
    docker-compose up --build --remove-orphans -d

stop:
    docker-compose stop

down:
    docker-compose down

destroy:
    docker-compose down --volumes

bash:
    docker-compose exec ${CONTAINER} bash

prune:
    docker system prune --volumes -f