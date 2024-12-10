// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: "cdhrbjl0",
			dataset: "production",
			useCdn: false,
			apiVersion: "2024-12-10",
			studioBasePath: "/studio",
			stega: {
				studioUrl: "/studio"
			}
		}),
		react()
	]
});