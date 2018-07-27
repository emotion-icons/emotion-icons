import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 13h1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm11 7h-4v-4h4v4zM12 4.414l6.649 6.649A1.002 1.002 0 0 0 18 12v8h-2v-5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5H6v-8c0-.429-.27-.794-.649-.937L12 4.414z" key="k0" />
]


const Home = ({ title, ...restProps }) => {
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
          ? [<title key="Home-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Home',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Home.displayName = 'Home'

Home.defaultProps = { height: 24, width: 24}

export default Home
