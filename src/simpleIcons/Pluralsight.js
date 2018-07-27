import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.72 1.755C10.08-.301 3.811 2.625 1.771 8.25c-2.071 5.699.854 11.956 6.494 14.01 5.655 2.055 11.956-.87 14.01-6.51 2.057-5.67-.87-11.939-6.524-13.995h-.031zM12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12" key="k0" />
,
<path d="M8.926 5.805v12.391L19.68 12 8.926 5.805zm1.049 1.769L17.625 12l-7.65 4.426V7.574" key="k1" />
,
<path d="M6.449 7.155v9.689L14.85 12 6.449 7.155zm1.051 1.8L12.811 12 7.5 15.061V8.939" key="k2" />
]

export const hex='#F15B2A'
const Pluralsight = ({ title, ...restProps }) => {
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
          ? [<title key="Pluralsight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pluralsight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pluralsight.displayName = 'Pluralsight'

Pluralsight.defaultProps = { height: 24, width: 24}

export default Pluralsight
