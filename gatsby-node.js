const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { errors, data } = await graphql(`
    {
      allSanityPortfolio {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `);
  if (errors) {
    throw new Error('There was a error');
  }
  const projects = data.allSanityPortfolio.edges;
  projects.forEach((project, i) => {
    const prev = projects[i - 1];
    const next = projects[i + 1];

    actions.createPage({
      path: `/projects/${project.node.slug.current}`,
      component: path.resolve('./src/template/project.js'),
      context: {
        slug: project.node.slug.current,
        prev,
        next,
      },
    });
  });
};
