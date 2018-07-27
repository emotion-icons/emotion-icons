import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.981 0a8.957 8.957 0 0 0-8.956 8.957v.363C3.283 15.828 10.082 24 10.082 24V13.205c-1.638-.747-2.756-2.369-2.756-4.253a4.66 4.66 0 1 1 6.152 4.416l-.033.01v4.427c4.296-.713 7.531-4.401 7.531-8.845A8.959 8.959 0 0 0 12.017.001h-.038.002z" key="k0" />
]

export const hex='#C0379A'
const Playerme = ({ title, ...restProps }) => {
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
          ? [<title key="Playerme-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Playerme',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Playerme.displayName = 'Playerme'

Playerme.defaultProps = { height: 24, width: 24}

export default Playerme
