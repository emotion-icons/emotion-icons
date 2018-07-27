import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" key="k0" />
,
<path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z" key="k1" />
]


const RadioCircleMarked = ({ title, ...restProps }) => {
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
          ? [<title key="RadioCircleMarked-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RadioCircleMarked',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RadioCircleMarked.displayName = 'RadioCircleMarked'

RadioCircleMarked.defaultProps = { height: 24, width: 24}

export default RadioCircleMarked
