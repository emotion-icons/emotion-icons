import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1.8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z" key="k0" />
]


const Dochub = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Dochub-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 416 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dochub',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dochub.displayName = 'Dochub'

Dochub.defaultProps = { height: undefined, width: undefined}

export default Dochub
