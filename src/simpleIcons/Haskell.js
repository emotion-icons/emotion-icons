import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M.006 20.47L5.649 12 .006 3.531h4.235l5.674 8.47-5.674 8.468zm5.643 0L11.29 12 5.65 3.531h4.266l11.253 16.938h-4.224l-3.535-5.34-3.495 5.34zM19.3 15.525l-1.877-2.827h6.571v2.826zm-2.826-4.235l-1.877-2.827h9.387v2.827z" className="a" key="k0" />
]

export const hex='#5D4F85'
const Haskell = ({ title, ...restProps }) => {
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
          ? [<title key="Haskell-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Haskell',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Haskell.displayName = 'Haskell'

Haskell.defaultProps = { height: 24, width: 24}

export default Haskell
