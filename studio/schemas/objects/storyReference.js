export default {
  name: "storyReference",
  type: "object",
  title: "Story reference",
  fields: [
    {
      name: "story",
      type: "reference",
      to: [
        {
          type: "story",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "story.name",
      url: "story.url",
    },
  },
};
