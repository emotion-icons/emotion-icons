import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M144.3 154.6c0-22.3 18.6-30.9 48.4-30.9 43.4 0 98.5 13.3 141.9 36.7V26.1C287.3 7.2 240.1 0 192.8 0 77.1 0 0 60.4 0 161.4c0 157.9 216.8 132.3 216.8 200.4 0 26.4-22.9 34.9-54.7 34.9-47.2 0-108.2-19.5-156.1-45.5v128.5c53 22.8 106.8 32.4 156 32.4 118.6 0 200.3-51 200.3-153.6 0-170.2-218-139.7-218-203.9" key="k0" />
]


const StripeS = ({ title, ...restProps }) => {
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
          ? [<title key="StripeS-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 362 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-StripeS',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

StripeS.displayName = 'StripeS'

StripeS.defaultProps = { height: undefined, width: undefined}

export default StripeS
