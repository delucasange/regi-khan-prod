export default {
  name: "video",
  type: "document",
  title: "Video",
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
      description: "Paste video complete URL",
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: "videoOrder",
      type: "number",
      title: "Video Order",
      description:"Order your videos from 0 being your first, onwards."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
