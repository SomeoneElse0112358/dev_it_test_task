FROM node

WORKDIR /dev_it_test_task

COPY . .

RUN npm install
