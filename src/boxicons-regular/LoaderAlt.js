import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 20c-4.337 0-8-3.663-8-8 0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10s10-4.579 10-10h-2c0 4.337-3.663 8-8 8z" key="k0" />
]


const LoaderAlt = ({ title, ...restProps }) => {
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
          ? [<title key="LoaderAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LoaderAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LoaderAlt.displayName = 'LoaderAlt'

LoaderAlt.defaultProps = { height: 24, width: 24}

export default LoaderAlt
