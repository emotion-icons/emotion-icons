import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9.71 21.957a.999.999 0 0 0 1.122-.402l8-12A1 1 0 0 0 18 8h-4.819l.806-4.835a.996.996 0 0 0-.224-.811A.998.998 0 0 0 13 2H7a1 1 0 0 0-.995.9l-1 10A1 1 0 0 0 6 14h3v7a1 1 0 0 0 .71.957zM7.105 12l.8-8h3.914l-.806 4.835a.996.996 0 0 0 .224.811c.19.225.469.354.763.354h4.132L11 17.697V13a1 1 0 0 0-1-1H7.105z" key="k0" />
]


const Bolt = ({ title, ...restProps }) => {
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
          ? [<title key="Bolt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bolt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bolt.displayName = 'Bolt'

Bolt.defaultProps = { height: 24, width: 24}

export default Bolt
