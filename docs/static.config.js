import React, { Component } from 'react'
import { renderStylesToString } from 'emotion-server'
import axios from 'axios'

export default {
  getSiteData: async () => ({
    title: 'Emotion Icons',
  }),
   siteRoot: 'https://rosenstein.io',
  basePath: 'emotion-icons',
  getRoutes: async () => {
    const { data: icons } = await axios.get('https://unpkg.com/emotion-icons/manifest.json')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
           icons,
         })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),

  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
