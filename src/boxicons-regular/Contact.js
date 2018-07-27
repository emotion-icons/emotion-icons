import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 2H5a1 1 0 0 0-1 1v4H2v2h2v2H2v2h2v2H2v2h2v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 18H6V4h14v16z" key="k0" />
,
<path d="M9 18h8a1 1 0 0 0 1-1c0-2.467-.865-4.289-2.346-5.245.52-.61.846-1.392.846-2.255C16.5 7.57 14.93 6 13 6S9.5 7.57 9.5 9.5c0 .863.326 1.645.846 2.255C8.865 12.711 8 14.533 8 17a1 1 0 0 0 1 1zm2.5-8.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S13.827 11 13 11s-1.5-.673-1.5-1.5zM13 13c2.101 0 2.747 1.684 2.932 3h-5.863c.184-1.316.83-3 2.931-3z" key="k1" />
]


const Contact = ({ title, ...restProps }) => {
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
          ? [<title key="Contact-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Contact',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Contact.displayName = 'Contact'

Contact.defaultProps = { height: 24, width: 24}

export default Contact
