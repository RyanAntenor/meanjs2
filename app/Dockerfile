FROM node:6
RUN mkdir -p /var/www/html
WORKDIR /var/www/html
COPY package.json /var/www/html
RUN npm install
COPY . /var/www/html
EXPOSE 4200
CMD ["npm", "start"]