export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Keep it small case",
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      description:"Order your categories from 1 onwards."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
