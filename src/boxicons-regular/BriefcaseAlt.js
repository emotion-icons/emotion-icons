import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM18 8h2v10h-2V8zm-8-4h4v2h-4V4zM8 8h8v10H8V8zM4 8h2v10H4V8z" key="k0" />
]


const BriefcaseAlt = ({ title, ...restProps }) => {
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
          ? [<title key="BriefcaseAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BriefcaseAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BriefcaseAlt.displayName = 'BriefcaseAlt'

BriefcaseAlt.defaultProps = { height: 24, width: 24}

export default BriefcaseAlt
