import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.33 7.851l-.716-.398c1.101-1.569 1.758-3.927.934-7.453 0 0-1.857 5.029-5.59 4.863l-4.37-2.431a1.171 1.171 0 0 0-.536-.15h-.101a1.183 1.183 0 0 0-.538.15L7.042 4.863C3.309 5.03 1.452 0 1.452 0c-.825 3.526-.166 5.884.934 7.453l-.716.398a1.133 1.133 0 0 0-.589.988l.022 14.591c0 .203.109.392.294.491a.58.58 0 0 0 .584 0l5.79-3.204c.366-.211.589-.582.589-.987v-6.817c0-.406.223-.783.588-.984l2.465-1.372a1.19 1.19 0 0 1 .59-.154c.2 0 .407.05.585.154l2.465 1.372c.365.201.588.578.588.984v6.817c0 .405.226.779.59.987l5.788 3.204a.59.59 0 0 0 .589 0 .564.564 0 0 0 .292-.491l.019-14.591a1.129 1.129 0 0 0-.589-.988z" key="k0" />
]

export const hex='#76D04B'
const Nodemon = ({ title, ...restProps }) => {
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
          ? [<title key="Nodemon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nodemon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nodemon.displayName = 'Nodemon'

Nodemon.defaultProps = { height: 24, width: 24}

export default Nodemon
