FROM cyclicci/ci-node:14

WORKDIR /usr/src/app

COPY package*.json ./

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Use NVM to install and use Node.js version 14
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install 14 && nvm use 14"

RUN npm install

COPY . .

CMD ["node", "server.js"]

EXPOSE 3000
