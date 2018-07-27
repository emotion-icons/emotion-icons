import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 7h-2V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM7 4h10v3H7V4zm8 14v2H9v-5h6v3zm5-1h-3v-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H4V9h16v8z" key="k0" />
,
<path d="M17 10h2v2h-2zm-3 0h2v2h-2z" key="k1" />
]


const Printer = ({ title, ...restProps }) => {
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
          ? [<title key="Printer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Printer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Printer.displayName = 'Printer'

Printer.defaultProps = { height: 24, width: 24}

export default Printer
