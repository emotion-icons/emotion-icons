import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM88 256H56c0-105.9 86.1-192 192-192v32c-88.2 0-160 71.8-160 160zm160 96c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" key="k0" />
]


const CompactDisc = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="CompactDisc-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CompactDisc',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CompactDisc.displayName = 'CompactDisc'

CompactDisc.defaultProps = { height: undefined, width: undefined}

export default CompactDisc
