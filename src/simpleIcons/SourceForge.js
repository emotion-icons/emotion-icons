import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.43 11.361c0-.372.303-.705.675-.705h6.968a.488.488 0 0 0 .486-.488V8.713a.487.487 0 0 0-.488-.487H2.43A2.43 2.43 0 0 0 0 10.654v2.695a2.429 2.429 0 0 0 2.426 2.431h5.021c.372 0 .676.331.676.706v1.282c0 .371-.304.707-.676.707H.486a.483.483 0 0 0-.485.486v1.453c0 .268.216.486.485.486H8.13a2.427 2.427 0 0 0 2.426-2.427v-2.697a2.428 2.428 0 0 0-2.427-2.428H3.104c-.372 0-.675-.334-.675-.704v-1.283zm21.088-3.13h-5.024V5.525h5.02a.485.485 0 0 0 .483-.486V3.585a.482.482 0 0 0-.484-.486h-5.019a2.428 2.428 0 0 0-2.427 2.427v2.706H13.74a.483.483 0 0 0-.484.485v1.459c0 .268.216.484.483.484h2.325v7.953c0 .24.099.284.303.284.488 0 2.124-.91 2.124-1.688v-6.551h5.024a.486.486 0 0 0 .484-.484v-1.46a.485.485 0 0 0-.484-.483h.003z" key="k0" />
]

export const hex='#535353'
const SourceForge = ({ title, ...restProps }) => {
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
          ? [<title key="SourceForge-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SourceForge',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SourceForge.displayName = 'SourceForge'

SourceForge.defaultProps = { height: 24, width: 24}

export default SourceForge
