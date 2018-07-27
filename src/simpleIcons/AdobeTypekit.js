import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 0v24h24V0H0zm1 1.026h22v21.948H1V1.026z" key="k0" />
,
<path d="M7.165 7.983H4.394c-.082 0-.115-.033-.099-.132l.198-1.385c.016-.083.049-.116.132-.116h6.926c.099 0 .132.033.149.132l.132 1.369c.016.099-.033.132-.116.132H8.962v9.235c0 .083-.033.132-.132.132H7.296c-.098 0-.131-.033-.131-.132V7.983zm7.553 4.766l2.523-3.414c.066-.082.082-.115.165-.115h1.682c.099 0 .132.066.066.148-.396.511-2.21 2.754-2.804 3.48a.108.108 0 0 0 0 .099l3.2 4.271c.033.066.016.132-.083.132h-1.946c-.099 0-.132-.033-.165-.099a158.661 158.661 0 0 1-2.638-3.678v3.662c0 .082-.017.115-.116.115h-1.55c-.116 0-.132-.033-.132-.132V6.449c0-.049.016-.099.115-.099h1.567c.066 0 .116.033.116.116v6.283z" key="k1" />
]

export const hex='#87EC00'
const AdobeTypekit = ({ title, ...restProps }) => {
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
          ? [<title key="AdobeTypekit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AdobeTypekit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AdobeTypekit.displayName = 'AdobeTypekit'

AdobeTypekit.defaultProps = { height: 24, width: 24}

export default AdobeTypekit
