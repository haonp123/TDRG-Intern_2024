import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import pugPlugin from "vite-plugin-pug";

const options = { pretty: true };
const locals = { name: "My Pug" };

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader(), pugPlugin(options, locals)],
});
