import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9 9-4.121 9-9-4.121-9-9-9zm0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7 7 3.206 7 7-3.206 7-7 7z" key="k0" />
,
<path d="M13 12V8h-2v6h6v-2zm4.284-8.293l1.412-1.416 3.01 3.001-1.413 1.416zM6.698 3.706l-2.99 2.999L2.29 5.292l2.99-2.998z" key="k1" />
]


const Alarm = ({ title, ...restProps }) => {
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
          ? [<title key="Alarm-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Alarm',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Alarm.displayName = 'Alarm'

Alarm.defaultProps = { height: 24, width: 24}

export default Alarm
