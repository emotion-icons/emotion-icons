import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 7.586l-5.707 5.707 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414z" key="k0" />
]


const ChevronUp = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronUp.displayName = 'ChevronUp'

ChevronUp.defaultProps = { height: 24, width: 24}

export default ChevronUp
