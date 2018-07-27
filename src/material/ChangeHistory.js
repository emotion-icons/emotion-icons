import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" key="k0" />
]


const ChangeHistory = ({ title, ...restProps }) => {
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
          ? [<title key="ChangeHistory-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChangeHistory',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChangeHistory.displayName = 'ChangeHistory'

ChangeHistory.defaultProps = { height: 24, width: 24}

export default ChangeHistory
