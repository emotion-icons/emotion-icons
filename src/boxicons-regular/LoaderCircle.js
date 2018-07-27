import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={20} r={2} key="k0" />
,
<circle cx={12} cy={4} r={2} key="k1" />
,
<circle cx={6.343} cy={17.657} r={2} key="k2" />
,
<circle cx={17.657} cy={6.343} r={2} key="k3" />
,
<circle cx={4} cy={12} r={2.001} key="k4" />
,
<circle cx={20} cy={12} r={2} key="k5" />
,
<circle cx={6.343} cy={6.344} r={2} key="k6" />
,
<circle cx={17.657} cy={17.658} r={2} key="k7" />
]


const LoaderCircle = ({ title, ...restProps }) => {
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
          ? [<title key="LoaderCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LoaderCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LoaderCircle.displayName = 'LoaderCircle'

LoaderCircle.defaultProps = { height: 24, width: 24}

export default LoaderCircle
