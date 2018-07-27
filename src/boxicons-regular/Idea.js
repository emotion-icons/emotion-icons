import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 2h2v2h-2zM5.707 7.121L4.293 5.707l1.414-1.414 1.414 1.414zm12.586-2.828l1.414 1.414-1.414 1.414-1.414-1.414zM15 18v-1.479c1.459-1.073 3-2.745 3-5.021C18 8.364 15.421 6 12 6s-6 2.364-6 5.5c0 2.275 1.541 3.947 3 5.021V18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm-2-2v1h-2v-1c0-.334-.167-.646-.445-.832C9.39 14.391 8 13.124 8 11.5 8 9.472 9.683 8 12 8s4 1.472 4 3.5c0 1.624-1.39 2.891-2.555 3.668A1.001 1.001 0 0 0 13 16zm-3 4h4v2h-4z" key="k0" />
]


const Idea = ({ title, ...restProps }) => {
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
          ? [<title key="Idea-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Idea',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Idea.displayName = 'Idea'

Idea.defaultProps = { height: 24, width: 24}

export default Idea
