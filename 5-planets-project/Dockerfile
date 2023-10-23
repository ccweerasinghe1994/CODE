FROM node:18.18.2

EXPOSE 8080

#RUN apt-get install tini

WORKDIR /app

COPY package.json package.lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

#ENTRYPOINT ["/sbin/tini","--"]

CMD ["node","./dist/index.js"]
