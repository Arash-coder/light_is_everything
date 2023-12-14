FROM --platform=linux/amd64 node:18-alpine AS dependencies
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /home/app
COPY package*.json ./
RUN npm i
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
FROM --platform=linux/amd64 node:18-alpine AS runner
WORKDIR /home/app
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=dependencies /home/app/.next/standalone ./standalone
COPY --from=dependencies /home/app/public /home/app/standalone/public
COPY --from=dependencies /home/app/.next/static /home/app/standalone/.next/static
EXPOSE 3000
CMD ["node", "./standalone/server.js"]