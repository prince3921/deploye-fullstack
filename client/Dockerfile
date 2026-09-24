
# build stage

FROM oven/bun:1.0.5-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build

# production stage

FROM nginx:1.27-alpine AS production
# remove default configration and add your own
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]