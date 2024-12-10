// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "@sanity/presentation";


export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [
		structureTool(),
		visionTool(),
		presentationTool({
			previewUrl: location.origin
		})

	],
	schema
});
