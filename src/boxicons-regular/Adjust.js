import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 18c-4.337 0-8-3.664-8-8s3.663-8 8-8 8 3.664 8 8-3.663 8-8 8z" key="k0" />
,
<path d="M12 6v12c3.282 0 6-2.719 6-6 0-3.284-2.718-6-6-6z" key="k1" />
]


const Adjust = ({ title, ...restProps }) => {
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
          ? [<title key="Adjust-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Adjust',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Adjust.displayName = 'Adjust'

Adjust.defaultProps = { height: 24, width: 24}

export default Adjust
