import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-5h-2v-2h2v2zm-4-2v6H9v-6h6zm-6-2V5h6v6H9zm10 0h-2V9h2v2zm0-4h-2V5h2v2zM5 5h2v2H5V5zm0 4h2v2H5V9zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm12 2v-2h2v2h-2z" key="k0" />
]


const Film = ({ title, ...restProps }) => {
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
          ? [<title key="Film-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Film',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Film.displayName = 'Film'

Film.defaultProps = { height: 24, width: 24}

export default Film
