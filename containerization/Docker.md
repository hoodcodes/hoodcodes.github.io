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

### Installation:

Getting Docker installed on laptop - steps I took: (this is for Windows - there are a few slight nuances if installing for linux/macOS)

- Check that you have following windows features enabled: (click Start -> type “Windows Features” and select it, and check the following)
  - Hyper-V
  - Containers (optional in my opinion. You will likely not use it, but rather will use the Linux subsystem for Windows instead, for good measure I enabled it anyway)
- Install Docker Desktop ( https://docs.docker.com/docker-for-windows/install/ )
  - Default to using “Linux Containers”. (note: this can be changed later if you want)
  - Submit request to ServiceDesk@globalmed.com and request the exclusion for the anti-virus (currently Carbon Black) to allow Docker usage.
- As a proof of it working correctly, I created an app with a docker image and ran the following commands (mentioned below in MISC section):
  - Build
  - Run
  - Push
- Become a Docker master by checking out some good docs at the Docker Tutorial Labs: https://docs.docker.com/samples/#tutorial-labs

### Terminology

**Docker image**: a private filesystem, just for your computer. Provides all files and code your container will need.

docker **build** command: creates a Docker image using the Dockerfile. This built image is in your machine’s local Docker image registry.
ex:

1. go to directory of the app: cd doodle\cheers2019
2. build the app: docker build -t cshood/cheers2019 .

docker **run** command: running a container launches your software with private resources, securely isolated from the rest of your machine.
ex: docker run -it --rm cshood/cheers2019

Sharing image on Docker Hub: **push** the image that describes it to Docker Hub
ex:

1. login to Docker Hub: docker login -u <username> (followed by prompt for pass)
2. push image to Docker Hub: docker push cshood/cheers2019
