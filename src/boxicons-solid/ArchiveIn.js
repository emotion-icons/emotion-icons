import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.858 8.485l-2.991-4.999A1.001 1.001 0 0 0 18.009 3h-12c-.351 0-.676.184-.857.484l-3.009 5 .015.009A.967.967 0 0 0 2 9v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a.982.982 0 0 0-.156-.506l.014-.009zM6.574 5h10.867l1.795 3H4.769l1.805-3zM13 15v3h-2v-3H8l4-4 4 4h-3z" key="k0" />
]


const ArchiveIn = ({ title, ...restProps }) => {
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
          ? [<title key="ArchiveIn-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArchiveIn',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArchiveIn.displayName = 'ArchiveIn'

ArchiveIn.defaultProps = { height: 24, width: 24}

export default ArchiveIn
