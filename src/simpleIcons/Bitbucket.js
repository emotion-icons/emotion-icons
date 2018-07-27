import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M.778 1.211a.768.768 0 0 0-.768.892l3.263 19.811c.084.499.515.867 1.022.872H19.95a.772.772 0 0 0 .77-.646l3.27-20.03a.768.768 0 0 0-.768-.891L.778 1.211zM14.52 15.528H9.522L8.17 8.464h7.561l-1.211 7.064z" key="k0" />
]

export const hex='#0052CC'
const Bitbucket = ({ title, ...restProps }) => {
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
          ? [<title key="Bitbucket-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
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

Bitbucket.defaultProps = { height: 24, width: 24}

export default Bitbucket
