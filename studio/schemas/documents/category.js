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
      description:"Order your categories from 0 being your first, onwards."
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};
