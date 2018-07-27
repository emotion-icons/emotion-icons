import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M507.3 27.3c10-10 2.9-27.3-11.3-27.3H16C1.8 0-5.4 17.2 4.7 27.3L216 238.6V472h-92c-15.5 0-28 12.5-28 28 0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12 0-15.5-12.5-28-28-28h-92V238.6L507.3 27.3z" key="k0" />
]


const GlassMartini = ({ title, ...restProps }) => {
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
          ? [<title key="GlassMartini-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GlassMartini',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GlassMartini.displayName = 'GlassMartini'

GlassMartini.defaultProps = { height: undefined, width: undefined}

export default GlassMartini
