import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.006A9.926 9.926 0 0 0 4.929 4.93c-3.898 3.898-3.898 10.242 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.899 3.898-10.243 0-14.142A9.926 9.926 0 0 0 12 2.006zM14.663 15H9V9.336l2.125 2.125 3.168-3.168 1.414 1.414-3.168 3.168L14.663 15z" key="k0" />
]


const LeftBottomArrowCircle = ({ title, ...restProps }) => {
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
          ? [<title key="LeftBottomArrowCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LeftBottomArrowCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LeftBottomArrowCircle.displayName = 'LeftBottomArrowCircle'

LeftBottomArrowCircle.defaultProps = { height: 24, width: 24}

export default LeftBottomArrowCircle
