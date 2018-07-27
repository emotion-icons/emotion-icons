import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M128 48v122.8h.2l-.2.2 85.3 85-85.3 85.2.2.2h-.2V464h256V341.4h-.2l.2-.2-85.3-85.2 85.3-85-.2-.2h.2V48H128zm213.3 303.9v71.5H170.7v-71.5l85.3-85.2 85.3 85.2zM256 245.4l-85.3-85.2V87.6h170.7v72.5L256 245.4z" key="k0" />
]


const Hourglass = ({ title, ...restProps }) => {
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
          ? [<title key="Hourglass-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hourglass',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hourglass.displayName = 'Hourglass'

Hourglass.defaultProps = { height: undefined, width: undefined}

export default Hourglass
