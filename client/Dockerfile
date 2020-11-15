FROM node:12-alpine
WORKDIR /equitas
COPY package*.json /equitas/
RUN npm install
COPY . /equitas/
EXPOSE 3000
CMD [ "npm", "run", "start" ]



