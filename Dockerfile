FROM ruby:2.6.3

ENV LANG C.UTF-8
ENV WORKSPACE=/usr/local/src

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt update
RUN apt install -y less build-essential nodejs
RUN apt install -y npm
RUN npm install n -g
RUN npm install -g yarn
RUN apt clean

# create user and group.
RUN groupadd -r --gid 1000 app && \
    useradd -m -r --uid 1000 --gid 1000 app

USER app
WORKDIR $WORKSPACE
