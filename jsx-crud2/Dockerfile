FROM node:14.15.4-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
ENV CI true
COPY ./app /home/app
COPY ./app/.vscode /root/.vscode-server/data/Machine
WORKDIR /home/app
RUN npm install
CMD ["bash"]