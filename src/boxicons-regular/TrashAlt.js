import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 2H9a1 1 0 0 0-1 1v3H3v2h2v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8h2V6h-5V3a1 1 0 0 0-1-1zm-5 2h4v2h-4V4zm7 4v12H7V8h10z" key="k0" />
]


const TrashAlt = ({ title, ...restProps }) => {
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
          ? [<title key="TrashAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TrashAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TrashAlt.displayName = 'TrashAlt'

TrashAlt.defaultProps = { height: 24, width: 24}

export default TrashAlt
