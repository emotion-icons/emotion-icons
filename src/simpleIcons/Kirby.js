import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0L1.428 6v12L12 24l10.573-6V6L12 0zm4.709 12.255l-2.963 1.598v.219h2.965v2.325H7.29v-2.312h2.955v-.225l-2.963-1.605V9.39L12 11.933l4.715-2.545v2.865l-.006.002z" key="k0" />
]

export const hex='#FF0100'
const Kirby = ({ title, ...restProps }) => {
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
          ? [<title key="Kirby-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Kirby',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Kirby.displayName = 'Kirby'

Kirby.defaultProps = { height: 24, width: 24}

export default Kirby
