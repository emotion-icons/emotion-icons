import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.085 21.095H0L11.085 7.712v13.383zm12.915 0H12.915a5.54 5.54 0 0 1 5.543-5.543A5.541 5.541 0 0 1 24 21.095zm-11.085-4.804V2.905H24L12.915 16.291zm-1.83-13.386A5.544 5.544 0 0 1 0 2.907h11.085v-.002z" key="k0" />
]

export const hex='#03363D'
const Zendesk = ({ title, ...restProps }) => {
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
          ? [<title key="Zendesk-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zendesk',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zendesk.displayName = 'Zendesk'

Zendesk.defaultProps = { height: 24, width: 24}

export default Zendesk
