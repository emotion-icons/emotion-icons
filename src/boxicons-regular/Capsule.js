import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.014 19.102l7.134-7.133a5.008 5.008 0 0 0-.001-7.072 4.969 4.969 0 0 0-3.536-1.463c-1.335 0-2.59.52-3.534 1.464l-7.134 7.133a5.01 5.01 0 0 0-.001 7.072 4.971 4.971 0 0 0 3.537 1.463 4.97 4.97 0 0 0 3.535-1.464zm1.476-12.79a2.979 2.979 0 0 1 2.12-.878c.802 0 1.556.312 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892-4.242-4.244 2.892-2.891zM6.356 17.689a3.006 3.006 0 0 1 0-4.244l2.828-2.828 4.242 4.244-2.826 2.827c-1.134 1.134-3.112 1.131-4.244.001z" key="k0" />
]


const Capsule = ({ title, ...restProps }) => {
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
          ? [<title key="Capsule-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Capsule',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Capsule.displayName = 'Capsule'

Capsule.defaultProps = { height: 24, width: 24}

export default Capsule
