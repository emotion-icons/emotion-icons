import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.5 8a4.505 4.505 0 0 0-4.5 4.5c0 .925.281 1.784.762 2.5h-3.523c.48-.716.761-1.575.761-2.5C11 10.019 8.981 8 6.5 8S2 10.019 2 12.5 4.019 17 6.5 17c.171 0 .334-.032.5-.051V17h11v-.051c2.244-.252 4-2.139 4-4.449 0-2.481-2.019-4.5-4.5-4.5zm-11 7C5.121 15 4 13.879 4 12.5S5.121 10 6.5 10 9 11.121 9 12.5 7.879 15 6.5 15zm11 0c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z" key="k0" />
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
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Voicemail.displayName = 'Voicemail'

Voicemail.defaultProps = { height: 24, width: 24}

export default Voicemail
