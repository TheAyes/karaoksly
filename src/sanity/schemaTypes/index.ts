import { genreType } from "./genre.ts";
import { songType } from "./song.ts";
import { blockContentType } from "./blockContent.ts";
import type { SchemaPluginOptions } from "sanity";

export const schema: SchemaPluginOptions = {
	types: [genreType, songType, blockContentType]
};