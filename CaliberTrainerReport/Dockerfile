FROM node:12.2.0

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

WORKDIR /src/app

ENV PATH node_modules/.bin$PATH

COPY package.json /src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /src/app

ENV PORT=8081
EXPOSE 8081
# start app
CMD ng serve --host 0.0.0.0