FROM node AS build
RUN mkdir -p /home/frontend
WORKDIR /home/frontend
COPY package*.json /home/frontend
RUN npm install
COPY . .
RUN npm install -g @angular/cli 
EXPOSE 4200
CMD ng serve --aot --o --host 0.0.0.0 --disableHostCheck true