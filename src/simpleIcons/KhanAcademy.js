import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.469 22.395S-1.229 13.553 5.401 6.96C11.415.969 20.5.041 22.076 0c0 0 2.438 8.006-3.651 17.081-6.083 9.075-14.521 6.614-14.521 6.614s8.336-10.626 7.332-10.561c-.701.041-5.076 4.856-8.768 9.263" key="k0" />
]

export const hex='#9DB63B'
const KhanAcademy = ({ title, ...restProps }) => {
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
          ? [<title key="KhanAcademy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-KhanAcademy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

KhanAcademy.displayName = 'KhanAcademy'

KhanAcademy.defaultProps = { height: 24, width: 24}

export default KhanAcademy
