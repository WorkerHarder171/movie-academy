# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.8.0
ARG ENVIRONMENT=production

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

# Install dependencies
FROM base as deps

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

FROM deps as build

COPY . .

RUN npm run build

FROM base as final

# Use ENVIRONMENT argument
ARG ENVIRONMENT
ENV NODE_ENV=$ENVIRONMENT

# Use PORT argument and set default to 3002
ARG PORT=3002
ENV PORT=$PORT
EXPOSE $PORT

USER node

# Copy necessary files
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/next.config.mjs ./next.config.mjs


CMD ["sh", "-c", "npm run start -- -p $PORT"]


