FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install --production
COPY . /app
RUN yarn build
EXPOSE 80
CMD ["yarn", "start"]