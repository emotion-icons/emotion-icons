import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 5h12v2H8zm0 6h12v2H8zm0 6h12v2H8zm-1.818-3H3c.036-.323.147-.628.332-.914.185-.285.532-.622 1.04-1.009.311-.238.51-.42.597-.542a.626.626 0 0 0 .13-.352.418.418 0 0 0-.129-.308.446.446 0 0 0-.324-.127.448.448 0 0 0-.332.131c-.086.088-.144.242-.173.464l-1.063-.089c.042-.307.118-.547.229-.72s.268-.305.47-.397c.202-.091.483-.137.84-.137.373 0 .663.044.871.132a1.088 1.088 0 0 1 .668 1.013c0 .24-.068.468-.205.687s-.384.458-.744.719a7.79 7.79 0 0 0-.428.32c-.072.06-.157.141-.254.238h1.656V14zM4.06 17.185l-1.002-.182c.083-.323.243-.572.48-.744.237-.173.572-.259 1.006-.259.498 0 .859.094 1.081.282a.893.893 0 0 1 .333.71.799.799 0 0 1-.135.453 1.14 1.14 0 0 1-.409.356c.148.037.261.081.339.129.127.08.225.184.295.313.07.131.105.284.105.464 0 .226-.058.44-.174.648-.117.207-.284.364-.503.477S4.971 20 4.615 20c-.347 0-.621-.04-.822-.124a1.233 1.233 0 0 1-.495-.363 1.679 1.679 0 0 1-.298-.6l1.06-.143c.042.217.106.366.194.449a.464.464 0 0 0 .335.125.455.455 0 0 0 .355-.157.612.612 0 0 0 .142-.422c0-.18-.045-.319-.137-.418a.482.482 0 0 0-.371-.147c-.083 0-.198.021-.344.064l.055-.769c.06.009.105.013.138.013.139 0 .254-.044.348-.134s.139-.196.139-.319a.379.379 0 0 0-.104-.282.387.387 0 0 0-.287-.105.42.42 0 0 0-.305.114c-.077.077-.13.211-.158.403zM5.688 4v4H4.615V5.379a3.192 3.192 0 0 1-.504.329 3.679 3.679 0 0 1-.611.242v-.895c.361-.12.641-.265.841-.433.2-.168.356-.375.469-.622h.878z" key="k0" />
]


const ListOl = ({ title, ...restProps }) => {
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
          ? [<title key="ListOl-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListOl',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListOl.displayName = 'ListOl'

ListOl.defaultProps = { height: 24, width: 24}

export default ListOl
