import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.074 24H1.895A1.9 1.9 0 0 1 0 22.104v-4.419a1.9 1.9 0 0 1 1.895-1.896H7.58V9.474A1.9 1.9 0 0 1 9.474 7.58h6.331V1.925C15.805.87 16.674 0 17.729 0h4.346C23.13 0 24 .87 24 1.926v20.148C24 23.13 23.13 24 22.074 24z" key="k0" />
]

export const hex='#FFC107'
const GoogleAnalytics = ({ title, ...restProps }) => {
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
          ? [<title key="GoogleAnalytics-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoogleAnalytics',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoogleAnalytics.displayName = 'GoogleAnalytics'

GoogleAnalytics.defaultProps = { height: 24, width: 24}

export default GoogleAnalytics
