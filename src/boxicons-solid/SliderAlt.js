import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 9a2.993 2.993 0 0 0-2.815 2H2v2h12.185c.414 1.161 1.514 2 2.815 2s2.401-.839 2.815-2H22v-2h-2.185A2.993 2.993 0 0 0 17 9zM7 15a2.995 2.995 0 0 0-2.815 2H2v2h2.185c.414 1.161 1.513 2 2.815 2s2.401-.839 2.815-2H22v-2H9.815A2.995 2.995 0 0 0 7 15zm5.815-10C12.401 3.838 11.302 3 10 3s-2.401.838-2.815 2H2v2h5.185C7.599 8.162 8.698 9 10 9s2.401-.838 2.815-2H22V5h-9.185z" key="k0" />
]


const SliderAlt = ({ title, ...restProps }) => {
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
          ? [<title key="SliderAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SliderAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SliderAlt.displayName = 'SliderAlt'

SliderAlt.defaultProps = { height: 24, width: 24}

export default SliderAlt
