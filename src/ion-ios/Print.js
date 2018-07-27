import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M128 248v200c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V248c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM384 48H128c-8.8 0-16 7.2-16 16v20c0 2.2 1.8 4 4 4h280c2.2 0 4-1.8 4-4V64c0-8.8-7.2-16-16-16z" key="k0" />
,
<path d="M432.5 112h-352C62.9 112 48 125.8 48 143.3v174.4c0 17.5 14.9 32.3 32.5 32.3H96c4.4 0 8-3.6 8-8V236c0-15.5 12.5-28 28-28h248c15.5 0 28 12.5 28 28v106c0 4.4 3.6 8 8 8h16.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3z" key="k1" />
]


const Print = ({ title, ...restProps }) => {
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
          ? [<title key="Print-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Print',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Print.displayName = 'Print'

Print.defaultProps = { height: undefined, width: undefined}

export default Print
