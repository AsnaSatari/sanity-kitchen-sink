export default {
  widgets: [
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
                  buildHookId: '630f70dcbf2db31f10144cda',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-on1vrapg',
                  apiId: '5f95382b-f5c8-4fc5-948b-52a26d6a041d'
                },
                {
                  buildHookId: '630f70dc19e9471b5e2abdbc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3sdbw7un',
                  apiId: '23e80c76-1296-4d89-8e95-6947c6f47ca8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AsnaSatari/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3sdbw7un.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
