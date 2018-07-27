import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9.707 17.707l10-10-1.414-1.414L9 15.586l-4.293-4.293-1.414 1.414 5 5a.997.997 0 0 0 1.414 0z" key="k0" />
]


const Check = ({ title, ...restProps }) => {
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
          ? [<title key="Check-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Check',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Check.displayName = 'Check'

Check.defaultProps = { height: 24, width: 24}

export default Check
