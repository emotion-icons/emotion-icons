import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 18v4h4v-4h-1v-2c0-2.206-1.794-4-4-4h-3v-2h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v2H8a4.003 4.003 0 0 0-3.996 3.911A.87.87 0 0 0 4 16v2H3v4h4v-4H6v-1.923A.972.972 0 0 0 6.003 16c0-1.103.896-2 2-2H11v4h-1v4h4v-4h-1v-4h3c1.103 0 2 .897 2 2v2h-1z" key="k0" />
]


const Sitemap = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="Sitemap-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sitemap',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Sitemap.displayName = 'Sitemap'

Sitemap.defaultProps = { height: 24, width: 24}

export default Sitemap
