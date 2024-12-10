import { defineField, defineType } from "sanity";

export const genreType = defineType({
	name: "genres",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (rule) => rule.required()
		}),
		defineField({
			name: "slug",
			type: "slug",
			validation: (rule) => rule.required(),
			options: {
				source: "title",
				maxLength: 96
			}
		}),
		defineField({
			name: "image",
			type: "image"
		}),
		defineField({
			name: "description",
			type: "text"
		})
	]
});