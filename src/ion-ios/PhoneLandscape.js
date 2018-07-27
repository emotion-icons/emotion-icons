import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 176.3v158.5c0 18.3 14.6 33.1 32.9 33.1h381c18.4 0 34.1-14.8 34.1-33.1V176.3c0-18.3-15.7-32.3-34.1-32.3h-381C46.6 144 32 158 32 176.3zM55 271v-30c0-2.2 1.8-4 4-4s4 1.8 4 4v30c0 2.2-1.8 4-4 4s-4-1.8-4-4zm414-15.5c0 9.6-7.8 17.4-17.4 17.4-9.6 0-17.4-7.8-17.4-17.4 0-9.6 7.8-17.4 17.4-17.4 9.6 0 17.4 7.8 17.4 17.4zM424 160v192H83V160h341z" key="k0" />
,
<path d="M441.6 255.5c0 5.5 4.5 10 9.9 10 5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.4.1-9.9 4.5-9.9 10z" key="k1" />
]


const PhoneLandscape = ({ title, ...restProps }) => {
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
          ? [<title key="PhoneLandscape-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PhoneLandscape',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PhoneLandscape.displayName = 'PhoneLandscape'

PhoneLandscape.defaultProps = { height: undefined, width: undefined}

export default PhoneLandscape
