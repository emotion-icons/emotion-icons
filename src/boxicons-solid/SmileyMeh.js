import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-5 8c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 11.104 7 10zm9 7H8v-2h8v2zm-.5-5c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z" key="k0" />
]


const SmileyMeh = ({ title, ...restProps }) => {
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
          ? [<title key="SmileyMeh-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmileyMeh',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmileyMeh.displayName = 'SmileyMeh'

SmileyMeh.defaultProps = { height: 24, width: 24}

export default SmileyMeh
