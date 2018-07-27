import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C5.54 2 .48 10.22 0 17.16 2.028 20.68 6.915 22 12 22s9.975-1.32 12-4.84C23.52 10.218 18.46 2 12 2zm.15 18.4c-9.54 0-10.456-4.034-10.456-4.034l.18-.976S4.5 9.72 6.15 9.72s2.34 2.34 3.69 2.34 4.274-5.19 5.324-5.19c1.047 0 2.82 1.95 4.27 3.75 1.45 1.802 2.878 4.887 2.878 4.887l-.008.034.15.886S21.688 20.4 12.148 20.4z" key="k0" />
]

export const hex='#5ECC62'
const Basecamp = ({ title, ...restProps }) => {
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
          ? [<title key="Basecamp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Basecamp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Basecamp.displayName = 'Basecamp'

Basecamp.defaultProps = { height: 24, width: 24}

export default Basecamp
