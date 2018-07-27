import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={15.5} cy={9.5} r={1.5} key="k0" />
,
<circle cx={8.5} cy={9.5} r={1.5} key="k1" />
,
<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0 0 10.24 0h-1.67c-.7 1.19-1.97 2-3.45 2z" key="k2" />
]


const SentimentSatisfied = ({ title, ...restProps }) => {
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
          ? [<title key="SentimentSatisfied-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SentimentSatisfied',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SentimentSatisfied.displayName = 'SentimentSatisfied'

SentimentSatisfied.defaultProps = { height: 24, width: 24}

export default SentimentSatisfied
