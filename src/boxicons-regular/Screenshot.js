import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3zM3 18a1 1 0 0 0 1 1h3v-2H5v-2H3v3zM19 4a1 1 0 0 0-1-1h-3v2h2v2h2V4zM5 5h2V3H4a1 1 0 0 0-1 1v3h2V5zM3 9h2v4H3zm14 0h2v3h-2zM9 3h4v2H9zm0 14h3v2H9z" key="k0" />
]


const Screenshot = ({ title, ...restProps }) => {
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
          ? [<title key="Screenshot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Screenshot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Screenshot.displayName = 'Screenshot'

Screenshot.defaultProps = { height: 24, width: 24}

export default Screenshot
