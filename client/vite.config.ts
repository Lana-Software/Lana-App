import vue from "@vitejs/plugin-vue";
/// <reference types="vitest" />
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [
		vue(),
		//Fix mongodb libraries
		nodePolyfills({
			include: ["crypto", "stream", "util", "zlib", "os"],
		}),
	],
	test: {
		reporters: "verbose",
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
				// rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
