import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 2.673v14.72h16.17L24 21.327V2.673H0zm9.827 8.42h-1.17l-2.88 4.054H2.35l3.94-5.265-3.638-5.07h3.336l2.66 3.885h1.18v2.397zm8.407 4.053l-2.88-4.053h-1.966v4.053h-2.73V4.812h2.734v3.885h1.965l2.658-3.885h3.33l-3.636 5.07 3.94 5.265h-3.416z" key="k0" />
]

export const hex='#E44600'
const Klout = ({ title, ...restProps }) => {
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
          ? [<title key="Klout-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Klout',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Klout.displayName = 'Klout'

Klout.defaultProps = { height: 24, width: 24}

export default Klout
