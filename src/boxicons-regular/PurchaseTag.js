import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.707 2.293A.996.996 0 0 0 12 2H3a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l9 9a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9zM12 19.586l-8-8V4h7.586l8 8L12 19.586z" key="k0" />
,
<circle cx={7.507} cy={7.505} r={1.505} key="k1" />
]


const PurchaseTag = ({ title, ...restProps }) => {
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
          ? [<title key="PurchaseTag-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PurchaseTag',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PurchaseTag.displayName = 'PurchaseTag'

PurchaseTag.defaultProps = { height: 24, width: 24}

export default PurchaseTag
