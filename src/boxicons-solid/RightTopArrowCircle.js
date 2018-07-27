import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.886 4.396 2.924 7.071 2.924s5.187-1.038 7.071-2.924c3.898-3.898 3.898-10.242 0-14.142A9.927 9.927 0 0 0 12 2.007zm3 12.657l-2.125-2.125-3.168 3.168-1.414-1.414 3.168-3.168L9.337 9H15v5.664z" key="k0" />
]


const RightTopArrowCircle = ({ title, ...restProps }) => {
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
          ? [<title key="RightTopArrowCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RightTopArrowCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RightTopArrowCircle.displayName = 'RightTopArrowCircle'

RightTopArrowCircle.defaultProps = { height: 24, width: 24}

export default RightTopArrowCircle
