export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      descripton: "Order your categories with 0 being the first",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
