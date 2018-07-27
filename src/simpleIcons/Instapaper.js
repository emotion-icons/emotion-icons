import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.766 20.259c0 1.819.271 2.089 2.934 2.292V24H6.301v-1.449c2.666-.203 2.934-.473 2.934-2.292V3.708c0-1.784-.27-2.089-2.934-2.292V0h11.398v1.416c-2.662.203-2.934.506-2.934 2.292v16.551z" key="k0" />
]

export const hex='#1F1F1F'
const Instapaper = ({ title, ...restProps }) => {
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
          ? [<title key="Instapaper-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Instapaper',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Instapaper.displayName = 'Instapaper'

Instapaper.defaultProps = { height: 24, width: 24}

export default Instapaper
