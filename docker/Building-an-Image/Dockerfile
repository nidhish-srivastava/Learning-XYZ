
FROM node:alpine  

WORKDIR /usr/application

# This way we copy the package file,run install if any change has happened,if not,cache ver will be used
COPY package.json .

RUN npm install

COPY . .

CMD ["npm","run","start"]

# docker run imageName
# But when we go on that port,our application aint running since our container is isolated from our local machine
# So on port 3333 it is running but inside container butnot our local machine,so we will map our port
# sudo docker run -d --name express-container -p 3333:3333 express-app   (the first port number is of our machine and 2nd port is of the container)


# docker images,docker rmi imageId
# docker ps
# docker stop container name
# docker rm container name

# We shud run the container commands and all in  detached terminal(giving container name as well)

# docker run -d --name express-container exress-app