import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.984 21h13a1 1 0 0 0 1-1c0-2.99-1.763-5.569-4.3-6.773a4.688 4.688 0 0 0 1.514-3.44c0-2.6-2.114-4.715-4.714-4.715S4.771 7.187 4.771 9.786c0 1.361.589 2.579 1.514 3.44-2.537 1.204-4.3 3.783-4.3 6.773A.998.998 0 0 0 2.984 21zM6.771 9.786c0-1.497 1.218-2.715 2.714-2.715s2.714 1.218 2.714 2.715c0 1.496-1.218 2.714-2.714 2.714s-2.714-1.218-2.714-2.714zM9.484 14.5a5.509 5.509 0 0 1 5.409 4.5H4.075a5.51 5.51 0 0 1 5.409-4.5zm6.016-2.003a.996.996 0 0 0 .293.71C17.966 15.38 19 17.101 19 21h2c0-3.74-.817-6.008-3.179-8.568.5-.805.768-1.803.754-2.856a6.038 6.038 0 0 0-1.892-4.305L15.316 6.73a4.03 4.03 0 0 1 1.259 2.873c.012.888-.271 1.686-.778 2.187a.995.995 0 0 0-.297.707z" key="k0" />
]


const Group = ({ title, ...restProps }) => {
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
          ? [<title key="Group-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Group',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Group.displayName = 'Group'

Group.defaultProps = { height: 24, width: 24}

export default Group
