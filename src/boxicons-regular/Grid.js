import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 10h4v4h-4zm6 0h4v4h-4zm0-6h4v4h-4zm-6 0h4v4h-4zM4 4h4v4H4zm0 6h4v4H4zm6 6h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4z" key="k0" />
]


const Grid = ({ title, ...restProps }) => {
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
          ? [<title key="Grid-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Grid',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Grid.displayName = 'Grid'

Grid.defaultProps = { height: 24, width: 24}

export default Grid
