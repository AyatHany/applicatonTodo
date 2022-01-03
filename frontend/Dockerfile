FROM node AS build
RUN mkdir -p /home/frontend
WORKDIR /home/frontend
RUN chown -R root:$(whoami) /home/frontend
RUN chmod -R 777 /home/frontend
ADD package*.json /home/fontend
RUN npm install
ADD . .
EXPOSE 4200
CMD npm start