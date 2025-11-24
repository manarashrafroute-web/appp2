
# FROM :: base image

## image from node 
FROM node:20.14.0 
#FROM node:20.14.0-alpine
#FROM node:20.14.0-slim


#WORKDIR :: Change working directory.
WORKDIR /app

#COPY :: COPY any file (هحطله اسم المكان)
COPY package.json /app
#COPY package.json .


#RUN ::build command
RUN npm install


#(هعمل copy للكود ازاي)

COPY . .

CMD ["npm" , "run" , "dev"]



