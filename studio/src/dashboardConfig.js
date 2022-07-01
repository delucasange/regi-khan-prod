export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62bf2c2a91bd050aa45732f5",
                  title: "Sanity Studio",
                  name: "regi-khan-prod-studio",
                  apiId: "47841fa3-d512-4153-9fdc-88846342f850",
                },
                {
                  buildHookId: "62bf2c2a7a23040c406e34cc",
                  title: "Blog Website",
                  name: "regi-khan-prod",
                  apiId: "02aaf381-9aab-4e01-9a25-180635f99b9e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/delucasange/regi-khan-prod",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://regi-khan-prod.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
