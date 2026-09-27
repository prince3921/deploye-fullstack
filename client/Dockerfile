# ---- build stage ----
FROM oven/bun:1.0.5-alpine AS builder
WORKDIR /app

# build-time env vars for Vite (VITE_* vars must be present at build time)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
ENV NODE_OPTIONS="--max-old-space-size=4096"

# copy full source so bun install picks up whichever lockfile exists
COPY . .
RUN bun install

# run the build with full error output surfaced
RUN bun run build

# ---- production stage ----
FROM nginx:1.27-alpine AS production

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]