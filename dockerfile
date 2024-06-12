FROM node:20.12.2 as base
ENV NODE_ENV production
RUN apt-get update && apt-get install
# Install Dev dependencies
FROM base as dev-dependencies
WORKDIR /myapp
ADD package.json yarn.lock ./
RUN yarn --production=false

# Install production dependencies
FROM dev-dependencies as prod-dependencies
RUN yarn install --production=true


# Build the app
FROM base as build
COPY --from=dev-dependencies /myapp/node_modules /myapp/node_modules
COPY --from=prod-dependencies /myapp/node_modules /myapp/node_modules
WORKDIR /myapp
ADD . .
RUN yarn --production=false
RUN yarn build
# Create the production image with minimal footprint
FROM base
WORKDIR /myapp
COPY --from=prod-dependencies /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp /myapp
ADD . .
CMD ["yarn", "start"]