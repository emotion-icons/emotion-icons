import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.485 2 1.999 6.038 1.999 11a1 1 0 0 0 1 1h8v6.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5h-2c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V12h8a1 1 0 0 0 1-1c0-4.962-4.485-9-9.999-9z" key="k0" />
]


const Umbrella = ({ title, ...restProps }) => {
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
          ? [<title key="Umbrella-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Umbrella',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Umbrella.displayName = 'Umbrella'

Umbrella.defaultProps = { height: 24, width: 24}

export default Umbrella
