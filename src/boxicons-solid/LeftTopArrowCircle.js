import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143 1.885 1.885 4.396 2.923 7.071 2.923s5.186-1.038 7.07-2.923c1.886-1.885 2.924-4.396 2.924-7.071S20.956 6.814 19.07 4.93A9.923 9.923 0 0 0 12 2.007zm2.293 13.7l-3.168-3.168L9 14.663V9h5.664l-2.125 2.125 3.168 3.168-1.414 1.414z" key="k0" />
]


const LeftTopArrowCircle = ({ title, ...restProps }) => {
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
          ? [<title key="LeftTopArrowCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LeftTopArrowCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LeftTopArrowCircle.displayName = 'LeftTopArrowCircle'

LeftTopArrowCircle.defaultProps = { height: 24, width: 24}

export default LeftTopArrowCircle
