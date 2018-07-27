import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223a.893.893 0 0 1-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574a.917.917 0 0 1 .852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227a.894.894 0 0 1 .852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57a.894.894 0 0 1 .852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223a.904.904 0 0 1-.854 0L.213 5.76z" key="k0" />
]

export const hex='#168EEA'
const Buffer = ({ title, ...restProps }) => {
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
          ? [<title key="Buffer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Buffer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Buffer.displayName = 'Buffer'

Buffer.defaultProps = { height: 24, width: 24}

export default Buffer
