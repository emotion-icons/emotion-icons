import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={5.5} cy={11.5} r={4.5} key="k0" />
,
<circle cx={18.5} cy={11.5} r={4.5} key="k1" />
,
<line x1={5.5} x2={18.5} y1={16} y2={16} key="k2" />
]


const Voicemail = ({ title, ...restProps }) => {
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
          ? [<title key="Voicemail-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Voicemail',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Voicemail.displayName = 'Voicemail'

Voicemail.defaultProps = { height: 24, width: 24}

export default Voicemail
