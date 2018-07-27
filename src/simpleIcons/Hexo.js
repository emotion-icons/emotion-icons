import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 .007L1.57 6.056V18.05L12 23.995l10.43-6.049V5.952L12 .007zm4.798 17.105l-.939.521-.939-.521V12.94H9.08v4.172l-.94.521-.938-.521V6.89l.939-.521.939.521v4.172h5.84V6.89l.94-.521.938.521v10.222z" key="k0" />
]

export const hex='#0E83CD'
const Hexo = ({ title, ...restProps }) => {
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
          ? [<title key="Hexo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hexo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hexo.displayName = 'Hexo'

Hexo.defaultProps = { height: 24, width: 24}

export default Hexo
