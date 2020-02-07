export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e3d1d6181066fd6f14d05b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4x7z2p21',
                  apiId: '67ed86ed-b429-476b-abe7-ebe8c4080552'
                },
                {
                  buildHookId: '5e3d1d6256f416c1f91f3d3f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-98523q9j',
                  apiId: 'f38dbe3a-f619-4c22-90f0-8611d072cdef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tiger1016/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-98523q9j.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
