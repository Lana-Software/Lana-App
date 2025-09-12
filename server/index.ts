import * as path from "node:path";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import * as dotenv from "dotenv";
import fastify, { type FastifyRequest } from "fastify";
import { runSearch } from "./db/mongo";

dotenv.config();

const server = fastify({
	logger: true,
});

server.register(cors, {
	origin: "*",
});

server.register(fastifyStatic, {
	root: path.join(__dirname, "../client/dist"),
	prefix: "/",
});

server.get("/search", (_request, reply) => {
	reply.sendFile("index.html");
});

server.get(
	"/api/:chara",
	async (request: FastifyRequest<{ Params: { chara: string } }>, reply) => {
		const { chara } = request.params;
		const res = await runSearch(chara);
		reply.send(res);
	},
);

server.listen({ port: 3000 });
