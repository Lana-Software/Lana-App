/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		vue(),
		//Fix mongodb libraries
		nodePolyfills({
			include: [
				'crypto',
				'stream',
				'util',
				'zlib',
				'os'
			]
		})
	],
	test: {
		reporters: "verbose",
	},
});
