import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.5 4h-5A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h5c3.238 0 5.5-2.056 5.5-5 0-1.565-.779-2.862-1.902-3.742A4.688 4.688 0 0 0 17 8.5C17 6.318 15.423 4 12.5 4zM9 7h3.5c1.184 0 1.5.943 1.5 1.5s-.316 1.5-1.5 1.5H9V7zm3.5 10H9v-4h3.5c1.18 0 2.5.855 2.5 2 0 1.252-.935 2-2.5 2z" key="k0" />
]


const Bold = ({ title, ...restProps }) => {
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
          ? [<title key="Bold-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bold',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bold.displayName = 'Bold'

Bold.defaultProps = { height: 24, width: 24}

export default Bold
