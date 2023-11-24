# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
#RUN means run the command during image creation 
RUN yarn install --production
#CMD means run the command during container/pod creation  /// aakhiri
CMD ["node", "app.js"]
EXPOSE 3000


#docker build -t todo . 
# docker run -d -p 3000:3000 96a3adcb4d68  left 3000 is for macine and the right one is for container port
