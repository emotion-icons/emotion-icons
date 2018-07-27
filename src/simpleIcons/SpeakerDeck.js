import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.2 13.598l.02-3.196-2.67 1.61m4.248-1.609l-.015 3.19 2.667-1.608m-2.667 1.613v-.004l-.004.002" key="k0" />
,
<path d="M23.997 4.59c0-.878-.715-1.59-1.597-1.59H1.6C.717 3 0 3.713 0 4.59v14.82C0 20.288.715 21 1.6 21h20.8c.883 0 1.6-.713 1.6-1.59V4.59h-.003zm-6.434 9.54h-.014c0 .586-.466 1.052-1.05 1.065l.036-.016h-9.07c-.58-.01-1.05-.48-1.05-1.06H6.41V9.88h.01c0-.58.463-1.05 1.033-1.06h9.06c.57.017 1.05.48 1.05 1.067v4.244z" key="k1" />
]

export const hex='#339966'
const SpeakerDeck = ({ title, ...restProps }) => {
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
          ? [<title key="SpeakerDeck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SpeakerDeck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SpeakerDeck.displayName = 'SpeakerDeck'

SpeakerDeck.defaultProps = { height: 24, width: 24}

export default SpeakerDeck
