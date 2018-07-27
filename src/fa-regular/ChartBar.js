import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M500 400c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v324h452zm-356-60v-72c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v72c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V140c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v200c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V204c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v136c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm96 0V108c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v232c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z" key="k0" />
]


const ChartBar = ({ title, ...restProps }) => {
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
          ? [<title key="ChartBar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChartBar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChartBar.displayName = 'ChartBar'

ChartBar.defaultProps = { height: undefined, width: undefined}

export default ChartBar
