import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M23.1 32C14.2 31.9 7 38.9 6.9 47.8c0 .9.1 1.8.2 2.8L74.9 462c1.7 10.4 10.7 18 21.2 18.1h325.1c7.9.1 14.7-5.6 16-13.4l67.8-416c1.4-8.7-4.5-16.9-13.2-18.3-.9-.1-1.8-.2-2.8-.2L23.1 32zm285.3 297.3H204.6l-28.1-146.8h157l-25.1 146.8z" key="k0" />
]


const Bitbucket = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Bitbucket-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bitbucket',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bitbucket.displayName = 'Bitbucket'

Bitbucket.defaultProps = { height: undefined, width: undefined}

export default Bitbucket
