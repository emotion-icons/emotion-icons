import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.626 20.485A.999.999 0 0 0 7.5 21h9a.999.999 0 0 0 .874-.515l4.444-8a1 1 0 0 0 0-.972l-4.444-8A1.001 1.001 0 0 0 16.5 3h-9a1 1 0 0 0-.874.514l-4.444 8a1 1 0 0 0 0 .972l4.444 7.999zM8.089 5h7.822l3.89 7-3.89 7H8.089l-3.89-7 3.89-7z" key="k0" />
]


const Hexagon = ({ title, ...restProps }) => {
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
          ? [<title key="Hexagon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hexagon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hexagon.displayName = 'Hexagon'

Hexagon.defaultProps = { height: 24, width: 24}

export default Hexagon
