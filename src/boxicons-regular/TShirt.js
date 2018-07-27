import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 22H7a1 1 0 0 1-1-1V10.618l-2.553 1.276A1 1 0 0 1 2 11V6a1 1 0 0 1 .485-.857l5-3a.99.99 0 0 1 .861-.08.997.997 0 0 1 .602.621C8.979 2.773 9.776 5 12 5s3.021-2.227 3.053-2.321c.099-.285.321-.513.604-.616.284-.101.599-.075.857.08l5 3c.301.18.486.505.486.857v5a1.001 1.001 0 0 1-1.448.895L18 10.618V21a1 1 0 0 1-1 1zm-9-2h8V9a1.001 1.001 0 0 1 1.448-.895L20 9.382V6.566l-3.586-2.151C15.748 5.502 14.396 7 12 7S8.252 5.502 7.586 4.415L4 6.566v2.815l2.553-1.276a.996.996 0 0 1 .973.044C7.82 8.332 8 8.653 8 9v11z" key="k0" />
]


const TShirt = ({ title, ...restProps }) => {
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
          ? [<title key="TShirt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TShirt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TShirt.displayName = 'TShirt'

TShirt.defaultProps = { height: 24, width: 24}

export default TShirt
