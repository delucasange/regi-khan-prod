export default {
  name: "story",
  type: "document",
  title: "Story",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Keep it small case",
    },
    {
      name: "url",
      type: "url",
      title: "Url",
      description: "Paste story complete URL",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: "storyOrder",
      type: "number",
      title: "Story Order",
      description:"Order your stories from 0 being your first, onwards."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
