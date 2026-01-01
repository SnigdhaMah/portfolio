import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioFile',
  title: 'Portfolio File',
  type: 'document', 
  fields: [
    defineField({
      name: 'file',
      type: 'file',
      options: { accept: 'application/pdf' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      type: 'string',
      options: {
        list: [ "Resume", "Transcript" ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'uploadedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
