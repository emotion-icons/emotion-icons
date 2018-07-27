import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-6.143-6.485a1 1 0 0 1-1.305.38l-3.172-1.586-2.523 4.206-1.715-1.029 3-5c.27-.447.836-.613 1.305-.38l3.172 1.586 2.523-4.206 1.715 1.029-3 5z" key="k0" />
]


const Chart = ({ title, ...restProps }) => {
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
          ? [<title key="Chart-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Chart',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Chart.displayName = 'Chart'

Chart.defaultProps = { height: 24, width: 24}

export default Chart
