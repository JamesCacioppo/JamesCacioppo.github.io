FROM golang:1.27.3-bookworm AS go
FROM node:24.22.1-bookworm-slim

COPY --from=go /usr/local/go /usr/local/go
ENV PATH="/usr/local/go/bin:${PATH}"
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates git \
    && rm -rf /var/lib/apt/lists/* \
    && git config --global --add safe.directory /src

WORKDIR /src
COPY package.json package-lock.json ./
COPY packages/ ./packages/
RUN npm ci
COPY . .
RUN npm run hugo -- mod graph

EXPOSE 1313
CMD ["npm", "run", "serve", "--", "--bind", "0.0.0.0"]
