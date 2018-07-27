import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.27 11.98c0-3.83-2.354-6.43-6.84-6.43H0v12.9h4.524c4.354 0 6.747-2.624 6.747-6.464v-.005zM8.056 12c0 2.766-1.42 3.963-3.7 3.963h-1.16V8.037h1.16c2.185 0 3.7 1.252 3.7 3.963zM24 18.45V5.55h-2.97v7.213L16.28 5.55h-3.105v12.9h2.973v-7.723l5.084 7.718H24v.004z" key="k0" />
]

export const hex='#2D72D9'
const DesignerNews = ({ title, ...restProps }) => {
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
          ? [<title key="DesignerNews-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DesignerNews',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DesignerNews.displayName = 'DesignerNews'

DesignerNews.defaultProps = { height: 24, width: 24}

export default DesignerNews
