FROM --platform=linux/amd64 node:20-slim AS dependencies
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /home/app
COPY package.json ./
RUN pnpm i
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm run build
FROM --platform=linux/amd64 node:20-slim AS runner
WORKDIR /home/app
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=dependencies /home/app/.next/standalone ./standalone
COPY --from=dependencies /home/app/public /home/app/standalone/public
COPY --from=dependencies /home/app/.next/static /home/app/standalone/.next/static
EXPOSE 3000
CMD ["node", "./standalone/server.js"]