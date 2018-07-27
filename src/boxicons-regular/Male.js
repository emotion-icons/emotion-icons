import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.5 22c3.584 0 6.5-2.916 6.5-6.5a6.455 6.455 0 0 0-1.259-3.828l4.466-4.465L20 9V4h-5l1.793 1.793-4.466 4.465A6.456 6.456 0 0 0 8.5 9C4.916 9 2 11.916 2 15.5S4.916 22 8.5 22zm0-11c2.481 0 4.5 2.019 4.5 4.5S10.981 20 8.5 20 4 17.981 4 15.5 6.019 11 8.5 11z" key="k0" />
]


const Male = ({ title, ...restProps }) => {
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
          ? [<title key="Male-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Male',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Male.displayName = 'Male'

Male.defaultProps = { height: 24, width: 24}

export default Male
