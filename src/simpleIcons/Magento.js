import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 24l-4.455-2.572v-12l2.97-1.715v12.001l1.485.902 1.485-.902V7.713l2.971 1.715v12L12 24zM22.391 6v12l-2.969 1.714V7.713L12 3.43 4.574 7.713v12.001L1.609 18V6L12 0l10.391 6z" key="k0" />
]

export const hex='#EE672F'
const Magento = ({ title, ...restProps }) => {
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
          ? [<title key="Magento-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Magento',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Magento.displayName = 'Magento'

Magento.defaultProps = { height: 24, width: 24}

export default Magento
