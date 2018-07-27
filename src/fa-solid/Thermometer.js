import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M476.8 20.4c-37.5-30.7-95.5-26.3-131.9 10.2l-45.7 46 50.5 50.5c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-50.4-50.5-45.1 45.4 50.3 50.4c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L209 167.4l-45.1 45.4L214 263c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-50.1-50.2L96 281.1V382L7 471c-9.4 9.4-9.4 24.6 0 33.9 9.4 9.4 24.6 9.4 33.9 0l89-89h99.9L484 162.6c34.9-34.9 42.2-101.5-7.2-142.2z" key="k0" />
]


const Thermometer = ({ title, ...restProps }) => {
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
          ? [<title key="Thermometer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
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

Thermometer.defaultProps = { height: undefined, width: undefined}

export default Thermometer
