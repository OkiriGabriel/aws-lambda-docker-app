FROM node:12.22.4-alpine
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

RUN apk update 
RUN apk add \
    g++ \
    make \
    cmake \
    unzip \
    curl-dev \
    autoconf \
    automake \
    libtool \
    libexecinfo-dev \
    python3

# Assumes your function is named "app.js", and there is a package.json file in the app directory 
COPY app.js package.json ./
RUN ln -s /usr/share/aclocal /usr/local/share/aclocal
RUN npm install aws-lambda-ric
# Install NPM dependencies for function
RUN npm install

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
CMD ["app.handler"]