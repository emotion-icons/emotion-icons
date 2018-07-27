import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M453.9 378.7c-51.8-8-55.7-11.7-55.7-11.7 15.6-74-22.4-151.1-76.3-195.6C250.1 112.2 141 155.2 56 65.2c-19.8-21-8.3 235.5 98.1 332.7 77.8 71 169.4 49.2 194.5 37.6 22.8-10.6 38.7-33.9 38.7-33.9 41.5 13 62 14.2 62 14.2 14.6 1.8 22-34.4 4.6-37.1zm-91.8 7.4c-77.7-23.3-145.3-81-189.1-126.2-3.6-3.7 1.6-9.2 5.5-6 43.1 35.5 108.9 80 193.3 107.9.2 8.1-4.5 19.7-9.7 24.3z" key="k0" />
]


const Leaf = ({ title, ...restProps }) => {
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
          ? [<title key="Leaf-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Leaf',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Leaf.displayName = 'Leaf'

Leaf.defaultProps = { height: undefined, width: undefined}

export default Leaf
