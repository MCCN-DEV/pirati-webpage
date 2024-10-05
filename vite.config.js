import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	pluginOptions: {
		sitemap: {
			baseURL: "https://www.grupapirati.com",
			routes: [], // Define your routes here
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
