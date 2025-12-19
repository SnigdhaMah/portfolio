import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    // comes with a _id field
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time Period',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url', // optional
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'context',
      title: 'Context Section',
      type: 'blockContent',
    }),
    defineField({
      name: 'project',
      title: 'Project Section',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges Section',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tldr',
      title: 'TLDR Section',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      time: 'time',
      tags: 'tags',
      repoUrl: 'repoUrl',
    },
    prepare(selection) {
      return selection
    },
  },
})
