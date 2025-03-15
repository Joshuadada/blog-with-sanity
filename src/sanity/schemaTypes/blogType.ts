import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title of the blog'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Small description'
    }),
    defineField({
      name: 'titleImage',
      type: 'image',
      title: 'Title Image'
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'tag' }],
      title: 'Category',
    }),
    defineField({
      name: "isHeadline",
      type: "boolean",
      title: "Headline",
      initialValue: false,
    }),
    defineField({
      name: "isFeature",
      type: "boolean",
      title: "Feature",
      initialValue: false,
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'content',
      type: 'document',
      title: 'Content',
      fields: [
        {
          name: 'sectionOne',
          type: 'document',
          title: 'Section One',
          fields: [
            {
              name: 'sectionOneImg',
              type: 'image',
              title: 'Section One Image'
            },
            {
              name: 'sectionOneText',
              type: 'array',
              title: 'Section One Content',
              of: [
                {
                  type: 'block',
                },
              ],
            }            
          ]
        },
        {
          name: 'sectionTwo',
          type: 'document',
          title: 'Section Two',
          fields: [
            {
              name: 'sectionTwoImgOne',
              type: 'image',
              title: 'Section Two Image One'
            },
            {
              name: 'sectionTwoImgTwo',
              type: 'image',
              title: 'Section Two Image Two'
            },          
          ]
        },
        {
          name: 'sectionThree',
          type: 'document',
          title: 'Section Three',
          fields: [
            {
              name: 'sectionThreeText',
              type: 'array',
              title: 'Section Three Content',
              of: [
                {
                  type: 'block',
                },
              ],
            },
            {
              name: 'sectionThreeDescription',
              type: 'string',
              title: 'Section Three Description'
            }        
          ]
        },
        {
          name: 'sectionFour',
          type: 'document',
          title: 'Section Four',
          fields: [
            {
              name: 'sectionFourImg',
              type: 'image',
              title: 'Section Four Image'
            },       
          ]
        },
        {
          name: 'sectionFive',
          type: 'document',
          title: 'Section Five',
          fields: [
            {
              name: 'sectionFiveImg',
              type: 'image',
              title: 'Section Five Image'
            },       
          ]
        },
        {
          name: 'sectionSix',
          type: 'document',
          title: 'Section Six',
          fields: [
            {
              name: 'sectionSixImg',
              type: 'image',
              title: 'Section Six Image'
            },
            {
              name: 'sectionSixText',
              type: 'array',
              title: 'Section Six Content',
              of: [
                {
                  type: 'block',
                },
              ],
            }            
          ]
        },
        {
          name: 'sectionSeven',
          type: 'document',
          title: 'Section Seven',
          fields: [
            {
              name: 'sectionSevenCarousel',
              type: 'array',
              title: 'Section Seven Carousel',
              of: [
                {
                  type: 'image',
                },
              ],
            }            
          ]
        },
        {
          name: 'sectionEight',
          type: 'document',
          title: 'Section Eight',
          fields: [
            {
              name: 'sectionEightText',
              type: 'array',
              title: 'Section Eight Content',
              of: [
                {
                  type: 'block',
                },
              ],
            },      
          ]
        },
      ]
    }),
  ],
})