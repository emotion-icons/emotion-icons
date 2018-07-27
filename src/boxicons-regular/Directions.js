import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.641 12.731l-3-2.5A1.006 1.006 0 0 0 18 10h-5V2h-2v2H6c-.234 0-.46.082-.64.231l-3 2.5a1.003 1.003 0 0 0 0 1.538l3 2.5c.18.149.406.231.64.231h5v11h2v-5h5c.234 0 .461-.082.641-.231l3-2.5a1.005 1.005 0 0 0 0-1.538zM6.362 9l-1.8-1.5 1.8-1.5H11v3H6.362zm11.276 6H13v-3h4.638l1.8 1.5-1.8 1.5z" key="k0" />
]


const Directions = ({ title, ...restProps }) => {
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
          ? [<title key="Directions-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Directions',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Directions.displayName = 'Directions'

Directions.defaultProps = { height: 24, width: 24}

export default Directions
