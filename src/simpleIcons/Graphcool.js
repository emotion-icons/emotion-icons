import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.138 7.929c-1.167-.657-2.633.2-2.868.348l-5.037 2.857a1.967 1.967 0 1 0 .712 1.197l5.023-2.851.032-.019c.33-.209 1.096-.521 1.454-.319.258.146.405.633.417 1.35h-.006v6.301a1.65 1.65 0 0 1-.823 1.426l-7.222 4.172a1.651 1.651 0 0 1-1.646 0l-7.222-4.172a1.65 1.65 0 0 1-.823-1.426v-8.34a1.648 1.648 0 0 1 .823-1.425l6.536-3.772a1.963 1.963 0 1 0-.483-1.328L3.262 5.823a3.04 3.04 0 0 0-1.524 2.63v8.338a3.04 3.04 0 0 0 1.519 2.631l7.221 4.172c.94.541 2.097.541 3.037 0l7.222-4.172a3.045 3.045 0 0 0 1.519-2.629v-6.062h.005c.034-1.422-.347-2.363-1.123-2.802z" key="k0" />
]

export const hex='#27AE60'
const Graphcool = ({ title, ...restProps }) => {
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
          ? [<title key="Graphcool-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Graphcool',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Graphcool.displayName = 'Graphcool'

Graphcool.defaultProps = { height: 24, width: 24}

export default Graphcool
