import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.431 9.886H0V7.665h7.53v2.221H5.1v6.45H2.431v-6.45zm5.514-2.221h7.31v2.221h-4.638v1.083h4.638v2.063h-4.638v1.08h4.638v2.225h-7.31V7.665zm10.43 6.451h1.046c1.664 0 1.907-1.352 1.907-2.166 0-.545-.179-2.063-2.115-2.063h-.854v4.23l.016-.001zm-2.67-6.451h4.384C22.98 7.665 24 9.8 24 11.985c0 2.66-1.409 4.351-4.434 4.351h-3.861V7.663v.002z" key="k0" />
]

export const hex='#E62B1E'
const TED = ({ title, ...restProps }) => {
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
          ? [<title key="TED-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TED',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TED.displayName = 'TED'

TED.defaultProps = { height: 24, width: 24}

export default TED
