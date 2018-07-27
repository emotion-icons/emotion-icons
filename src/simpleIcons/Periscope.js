import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.135 24c1.875 0 9.314-8.439 9.314-14.096C21.449 4.49 17.22 0 12.135 0 6.78 0 2.551 4.488 2.551 9.904 2.551 15.56 9.99 24 12.135 24zM10.639 3.846c.485-.12.995-.185 1.524-.185 3 0 5.581 2.551 5.581 5.865 0 2.985-2.581 5.535-5.596 5.535-3.345 0-5.925-2.55-5.925-5.535 0-1.396.45-2.64 1.229-3.63v.03a2.234 2.234 0 0 0 2.25 2.234C10.948 8.161 12 7.14 12 5.896a2.24 2.24 0 0 0-1.359-2.053l-.002.003z" key="k0" />
]

export const hex='#40A4C4'
const Periscope = ({ title, ...restProps }) => {
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
          ? [<title key="Periscope-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Periscope',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Periscope.displayName = 'Periscope'

Periscope.defaultProps = { height: 24, width: 24}

export default Periscope
