import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.76 12.01l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.39l-1.103-1.909a1.004 1.004 0 0 0-.607-.466.993.993 0 0 0-.759.1L12.01 3.26l-1.909-1.104a.998.998 0 0 0-1.366.365l-1.104 1.91H5.432a1 1 0 0 0-1 1V7.63l-1.91 1.104a1.003 1.003 0 0 0-.364 1.368l1.104 1.908-1.104 1.909a1.001 1.001 0 0 0 .364 1.366l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.007 1.007 0 0 0 .866.5 1 1 0 0 0 .501-.134l1.908-1.104 1.91 1.104a1.001 1.001 0 0 0 1.366-.366l1.103-1.909h2.199a1 1 0 0 0 1-1V16.39l1.91-1.104a1 1 0 0 0 .365-1.366l-1.103-1.91zm-2.022.5l.893 1.543-1.544.893a1 1 0 0 0-.499.866v1.776h-1.776a.998.998 0 0 0-.866.5l-.891 1.543-1.545-.893a1 1 0 0 0-1.001 0l-1.543.893-.892-1.543a1.002 1.002 0 0 0-.866-.5H6.432v-1.776a1 1 0 0 0-.499-.866l-1.544-.893.893-1.543a.995.995 0 0 0 0-1.001l-.893-1.543 1.544-.893a1 1 0 0 0 .499-.866V6.432h1.776c.357 0 .688-.19.866-.5l.892-1.543 1.544.892a.998.998 0 0 0 1 0l1.545-.892.891 1.543a1 1 0 0 0 .866.5h1.776v1.776a1 1 0 0 0 .499.866l1.544.893-.893 1.543a1.003 1.003 0 0 0 0 1z" key="k0" />
]


const Certification = ({ title, ...restProps }) => {
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
          ? [<title key="Certification-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Certification',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Certification.displayName = 'Certification'

Certification.defaultProps = { height: 24, width: 24}

export default Certification
