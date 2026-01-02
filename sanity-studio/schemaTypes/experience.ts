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
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time Period',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'End Time Period',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
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
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges Section',
      type: 'blockContent',
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
