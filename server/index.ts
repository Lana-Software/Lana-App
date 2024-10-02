import fastify, { FastifyRequest } from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import * as path from 'node:path'
import { run } from './db/mongo'
import * as dotenv from 'dotenv'

dotenv.config()

const server = fastify({
	logger: true,
})

server.register(cors, {
	origin: '*',
})

server.register(fastifyStatic, {
	root: path.join(__dirname, '../client/dist'),
	prefix: '/',
})

server.get('/search', (request, reply) => {
	reply.sendFile("index.html")
})

server.get('/api/:chara', async (request: FastifyRequest<{ Params: { chara: string } }>, reply) => {
	const {chara} = request.params
	const res = await run(chara)
	reply.send(res)
})

server.listen({ port: 3000 })