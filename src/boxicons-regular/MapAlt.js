import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.447 7.105l-6-3a1 1 0 0 0-.895 0L9 6.882 3.447 4.105A.998.998 0 0 0 2 5v11c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 17.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V8c0-.379-.214-.725-.553-.895zM8 17.382l-4-2V6.618l4 2v8.764zm6-2l-4 2V8.618l4-2v8.764zm6 2l-4-2V6.618l4 2v8.764z" key="k0" />
]


const MapAlt = ({ title, ...restProps }) => {
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
          ? [<title key="MapAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MapAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MapAlt.displayName = 'MapAlt'

MapAlt.defaultProps = { height: 24, width: 24}

export default MapAlt
