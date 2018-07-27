import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.647 3.111a.999.999 0 0 0-.728-.728C20.857 2.368 19.364 2 17.496 2c-2.585 0-4.663.713-6.011 2.061A368.762 368.762 0 0 0 8.31 7.273c-1.214-.137-4.077-.203-6.017 1.738a.996.996 0 0 0 0 1.414l11.313 11.313a.997.997 0 0 0 1.414 0c1.954-1.953 1.894-4.814 1.767-6.01l3.184-3.183c3.191-3.191 1.74-9.181 1.676-9.434zm-6.626 11.556a.999.999 0 0 0-.273.903c.005.025.407 2.242-.536 3.944L4.517 9.82c1.7-.938 3.941-.504 3.948-.504.33.07.684-.036.923-.283.003-.003 1.406-1.453 3.512-3.559C14.118 4.256 16.071 4 17.496 4c.947 0 1.793.111 2.332.203.244 1.431.625 5.032-1.271 6.929l-3.536 3.535z" key="k0" />
,
<circle cx={15.728} cy={8.304} r={2} key="k1" />
,
<path d="M3 21s3 0 5-2l-3-3c-2 1-2 5-2 5z" key="k2" />
]


const Rocket = ({ title, ...restProps }) => {
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
          ? [<title key="Rocket-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rocket',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rocket.displayName = 'Rocket'

Rocket.defaultProps = { height: 24, width: 24}

export default Rocket
