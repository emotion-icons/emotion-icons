import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 11.997a1.316 1.316 0 1 1 0-2.632 1.316 1.316 0 0 1 0 2.632zm2.916-.021c0-2.828-1.109-5.397-2.916-7.298a10.556 10.556 0 0 0-2.916 7.298c0 1.297.234 2.535.66 3.683-.618.9-1.074 2.16-1.275 3.616.639-.767 1.422-1.306 2.292-1.591.363.555.78 1.096 1.239 1.574.461-.494.876-1.02 1.239-1.59.87.271 1.653.826 2.29 1.576-.199-1.456-.655-2.716-1.275-3.615.427-1.155.66-2.385.66-3.69l.002.037z" key="k0" />
,
<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-22C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" key="k1" />
]

export const hex='#34A7C1'
const Protoio = ({ title, ...restProps }) => {
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
          ? [<title key="Protoio-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Protoio',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Protoio.displayName = 'Protoio'

Protoio.defaultProps = { height: 24, width: 24}

export default Protoio
