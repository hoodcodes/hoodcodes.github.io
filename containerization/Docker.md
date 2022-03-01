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
