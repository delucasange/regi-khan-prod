export default {
  name: "videoReference",
  type: "object",
  title: "Video reference",
  fields: [
    {
      name: "video",
      type: "reference",
      to: [
        {
          type: "video",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "video.name",
      url: "video.url",
    },
  },
};
