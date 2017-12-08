# Pull base image.
FROM ubuntu:16.04

# Install Node.js
RUN apt-get update && apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_7.x |  bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Bundle app source
# Trouble with COPY http://stackoverflow.com/a/30405787/2926832
COPY . /src

# Install app dependencies
RUN cd /src; npm install

# Binds to port 8080
EXPOSE  8000

#  Defines your runtime(define default command)
# These commands unlike RUN (they are carried out in the construction of the container) are run when the container
CMD ["node", "/src/server.js"]
