import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M142 64c-7.7 0-14 6.3-14 14v20c0 7.7 6.3 14 14 14s14-6.3 14-14V78c0-7.7-6.3-14-14-14zm14 278V190c0-7.7-6.3-14-14-14s-14 6.3-14 14v166c0 15.5 12.5 28 28 28h166c7.7 0 14-6.3 14-14s-6.3-14-14-14H170c-7.7 0-14-6.3-14-14zm278 14h-20c-7.7 0-14 6.3-14 14s6.3 14 14 14h20c7.7 0 14-6.3 14-14s-6.3-14-14-14z" key="k0" />
,
<path d="M64 142c0 7.7 6.3 14 14 14h264c7.7 0 14 6.3 14 14v264c0 7.7 6.3 14 14 14s14-6.3 14-14V156c0-15.5-12.5-28-28-28H78c-7.7 0-14 6.3-14 14z" key="k1" />
]


const Crop = ({ title, ...restProps }) => {
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
          ? [<title key="Crop-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Crop',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Crop.displayName = 'Crop'

Crop.defaultProps = { height: undefined, width: undefined}

export default Crop
