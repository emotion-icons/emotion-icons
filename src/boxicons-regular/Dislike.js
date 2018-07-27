import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H6c-.417 0-.79.259-.937.649l-3 8A1 1 0 0 0 2 12v3a1 1 0 0 0 1 1h6.612l-1.561 4.684a.996.996 0 0 0 .137.901c.189.261.491.415.812.415h3c.297 0 .578-.132.769-.36l4.7-5.64H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-9.469 17h-1.144l1.561-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM20 14h-2V5h2v9z" key="k0" />
]


const Dislike = ({ title, ...restProps }) => {
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
          ? [<title key="Dislike-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dislike',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dislike.displayName = 'Dislike'

Dislike.defaultProps = { height: 24, width: 24}

export default Dislike
