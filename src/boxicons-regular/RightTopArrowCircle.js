import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.886 4.396 2.924 7.071 2.924s5.187-1.038 7.071-2.924c3.898-3.898 3.898-10.242 0-14.142A9.927 9.927 0 0 0 12 2.007zm5.657 15.649c-1.508 1.508-3.517 2.338-5.657 2.338s-4.149-.83-5.657-2.338c-3.118-3.119-3.118-8.194 0-11.313C7.85 4.836 9.858 4.007 12 4.007s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z" key="k0" />
,
<path d="M11.461 11.125l-3.168 3.168 1.414 1.414 3.168-3.168L15 14.664V9H9.337z" key="k1" />
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
