import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.846 1.979L18.895 0 8.125 10.5 1.57 5.49l-1.424.705v11.64l1.41.69 6.555-4.995L18.906 24l4.948-1.949V1.995l-.012-.016h.004zM2.275 14.729V9.271l3.03 2.699-3.03 2.745v.014zm9.721-2.744L18.07 7.44v9.121l-6.074-4.576z" key="k0" />
]

export const hex='#0271BC'
const VisualStudioCode = ({ title, ...restProps }) => {
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
          ? [<title key="VisualStudioCode-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VisualStudioCode',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VisualStudioCode.displayName = 'VisualStudioCode'

VisualStudioCode.defaultProps = { height: 24, width: 24}

export default VisualStudioCode
