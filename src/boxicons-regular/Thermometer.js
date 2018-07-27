import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 12.957V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9.957c-1.263.928-2 2.398-2 4.043 0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.645-.737-3.115-2-4.043zM10 4v5H8V4h2zM9 20c-1.654 0-3-1.346-3-3 0-1.122.557-2.104 1.489-2.628A1 1 0 0 0 8 13.5V11h2v2.5a1 1 0 0 0 .511.872C11.443 14.896 12 15.878 12 17c0 1.654-1.346 3-3 3zm5-17h6v2h-6zm0 4h4v2h-4zm0 4h2v2h-2z" key="k0" />
]


const Thermometer = ({ title, ...restProps }) => {
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
          ? [<title key="Thermometer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Thermometer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Thermometer.displayName = 'Thermometer'

Thermometer.defaultProps = { height: 24, width: 24}

export default Thermometer
