import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M409.6 64H102.4C81.3 64 64 81.3 64 102.4v307.2c0 21.1 17.3 38.4 38.4 38.4h307.2c21.1 0 38.4-17.3 38.4-38.4V102.4c0-21.1-17.3-38.4-38.4-38.4zM179.2 409.6h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm115.2 230.4h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8zm0-115.2h-76.8v-76.8h76.8v76.8z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Grid.defaultProps = { height: undefined, width: undefined}

export default Grid
