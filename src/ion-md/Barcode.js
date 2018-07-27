import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M88 128h48v256H88zm144 0h48v256h-48zm-72 16h48v224h-48zm144 0h48v224h-48zm72-16h48v256h-48z" key="k0" />
,
<path d="M104 104V56H16v400h88v-48H64V104zm304-48v48h40v304h-40v48h88V56z" key="k1" />
]


const Barcode = ({ title, ...restProps }) => {
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
          ? [<title key="Barcode-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Barcode',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Barcode.displayName = 'Barcode'

Barcode.defaultProps = { height: undefined, width: undefined}

export default Barcode
