import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" key="k0" />
]


const Plus = ({ title, ...restProps }) => {
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
          ? [<title key="Plus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 12 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Plus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Plus.displayName = 'Plus'

Plus.defaultProps = { height: 16, width: 12}

export default Plus
