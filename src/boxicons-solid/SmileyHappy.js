import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8.5 8c.828 0 1.5.896 1.5 2s-.672 2-1.5 2S7 11.104 7 10s.672-2 1.5-2zM12 18a5.954 5.954 0 0 1-4.8-2.399L8.799 14.4A3.971 3.971 0 0 0 12 16c1.27 0 2.436-.583 3.2-1.601l1.6 1.201A5.955 5.955 0 0 1 12 18zm3.5-6c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z" key="k0" />
]


const SmileyHappy = ({ title, ...restProps }) => {
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
          ? [<title key="SmileyHappy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmileyHappy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmileyHappy.displayName = 'SmileyHappy'

SmileyHappy.defaultProps = { height: 24, width: 24}

export default SmileyHappy
