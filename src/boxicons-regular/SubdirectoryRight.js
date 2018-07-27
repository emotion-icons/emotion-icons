import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 6v9h8v3l4-4-4-4v3H9V6z" key="k0" />
]


const SubdirectoryRight = ({ title, ...restProps }) => {
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
          ? [<title key="SubdirectoryRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SubdirectoryRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SubdirectoryRight.displayName = 'SubdirectoryRight'

SubdirectoryRight.defaultProps = { height: 24, width: 24}

export default SubdirectoryRight
