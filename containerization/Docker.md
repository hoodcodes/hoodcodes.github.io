[Home](../)

# Docker Reference

- Created: 2013
- Created By: Solomon Hykes
- Characteristics: Written in Go, Docker is a set of Paas (Platform as a Service) products that use OS-level virtualization to deliver software in packages called containers. The software that hosts the containers is called the Docker Engine.

#### Reference Links

- [Docker.com](https://www.docker.com/)
- [Docker - Wikipedia](<https://en.wikipedia.org/wiki/Docker_(software)>)
- [Docker - Getting Started](https://www.docker.com/get-started)

### Image

Docker images are read-only templates used to build containers.

Images provide an infinitely reproducible virtual environment.

Images are stored in a Docker registry such as registry.hub.docker.com.

### Container

Containers are deployed instances created from Docker images.

Containers are processes with much more isolation.

There are built-in examples of isolation with things like virtual memory, and processes. But when we start talking about the other things such as:
mount namespaces with a separate file system
network namespaces with a separate network

and putting all this together so it looks like a completely separate computer to a process, then we are talking about containers.

Containers enable through isolation, the mitigation of conflicts on a server that has a ton of resources on it. Things like port conflicts, resource conflicts, conflicting libraries - go away.

### Compose

**Course Notes: LinkedIn: Docker for Developers (2019)**

- [77min LinkedIn: Docker for Developers (2019)](https://www.linkedin.com/learning/docker-for-developers-2/)

Main Components

- Container - where apps or resources are located
- Image - from what the container is built (recipe)
- Volume - holds the data in your containers
- Networking - how containers connect to each other

You want to create 2 files in your project:

- .dockerignore
- Dockerfile

Example of a .dockerignore:

```
node_modules
npm-debug.log
```

Example of a Dockerfile:

```
FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "npm", "start"]
```

**Docker Command Examples:**

create docker image cmd: `docker build -t <name tag>`

- example: `docker build -t manny/simple-backend`

see all images: `docker images`

- remove an image: `docker rmi <image id>`

run a container: `docker run -p 4000:4000 <name tag>`

- example: `docker run -p 4000:4000 manny/simple-backend`

stop a running container: `Ctrl-C Ctrl-C`

list containers running right now: `docker ps`

stop a container: `docker stop <first 5 chars of container id>`

start the container back up: `docker start <first 5 chars of container id>`

push image to docker hub: `docker push <name tag>`

pull image from docker hub: `docker pull <name tag>`

**Docker Compose**

Compose - tool that enables us to manage multiple docker container and set your entire backend with a single file

This project will have the code that is unchanging in containers:
container for front end
container for back end
And also for data that changes there will be a:
volume - to host the DB

building out your docker-compose.yml file
indentation matters!!!

Example content of a docker-compose.yml file:

```
app:
   container_name: app
   restart: always
   build: .
   ports:
       - "4000:4000"
   links:
    - mongo
mongo:
   container_name: mongo
   image: mongo
   expose:
       - "27017"
   volumes:
       - ./data:/data/db
   ports:
       - "27017:27017"

```

to build from a compose file: `docker compose build`

to start up a container in the compose file:
`docker compose up -d <container name>` (starts just that container)
`docker-compose up` (starts all of them)
to stop a container or all containers in the compose file:
`docker-compose stop <container name>` (stops just that container)
`docker-compose stop` (stops all containers)
