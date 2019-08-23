export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6074f1d4a6d2284d86dade',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nh9iv986',
                  apiId: '79ac95f5-cfab-4257-b35a-e2472a0dd27f'
                },
                {
                  buildHookId: '5d6074f11c5e2ff12d802b9a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vmpyqjcc',
                  apiId: '7c437f43-f1fa-4233-ad83-83fef7616d1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alcance/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vmpyqjcc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
