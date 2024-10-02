import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import * as path from 'node:path'

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

server.listen({ port: 3000 })