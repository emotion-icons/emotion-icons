import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M352 32v35h63.1l-81.4 80.5c-7.5-7.2-13.2-11-13.2-11C302.2 123.6 280 116 256 116c-30.2 0-57.6 12-77.8 31.4l-15.2-15 31.4-31.4-28.5-28.5-31.5 31.5-37.5-37H160V32H32v128h35V91.3l40.3 39.9-31.2 31.2 28.5 28.5 31.4-31.4 19.4 19.2c-7.3 14.9-11.5 31.7-11.5 49.5 0 54.8 39.5 100.4 91.1 110.2v45.3h-63V424h63v56h42v-56h63v-40.2h-63v-45.3c50.8-9.9 91.2-55.5 91.2-110.3 0-17.7-4.2-34.8-11.5-49.6L445 91.3V160h35V32H352zm-96 258c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" key="k0" />
]


const Transgender = ({ title, ...restProps }) => {
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
          ? [<title key="Transgender-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Transgender',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Transgender.displayName = 'Transgender'

Transgender.defaultProps = { height: undefined, width: undefined}

export default Transgender
