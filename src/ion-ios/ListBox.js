import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z" key="k0" />
]


const ListBox = ({ title, ...restProps }) => {
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
          ? [<title key="ListBox-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListBox',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListBox.displayName = 'ListBox'

ListBox.defaultProps = { height: undefined, width: undefined}

export default ListBox
