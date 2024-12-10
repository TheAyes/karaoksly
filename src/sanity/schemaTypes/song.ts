import { defineField, defineType } from "sanity";

export const songType = defineType({
	name: "songs",
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
			name: "artist",
			type: "string",
			validation: (rule) => rule.required()
		}),
		defineField({
			name: "genres",
			type: "array",
			validation: (rule) => rule.min(1),
			of: [
				defineField({
					name: "genre",
					type: "reference",
					to: [
						{
							type: "genres"
						}
					],
					validation: (rule) => rule.required()
				})
			]
		}),

		defineField({
			name: "image",
			type: "image"
		}),
		defineField({
			name: "lyrics",
			type: "text"
		})
	]
});