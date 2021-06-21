import * as React from 'react'
import {css} from '@emotion/react'

export type EmotionIcon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<EmotionIconProps> & React.RefAttributes<SVGSVGElement>
>

export interface EmotionIconProps extends React.PropsWithRef<React.SVGProps<SVGSVGElement>> {
  size?: number | string
  title?: string | null
}

interface EmotionIconBaseProps {
  iconAttrs: React.SVGProps<SVGSVGElement>
  iconViewBox: string
  iconVerticalAlign: string
}

export const EmotionIconBase = React.forwardRef<SVGSVGElement, EmotionIconProps & EmotionIconBaseProps>(
  (props, ref) => {
    const {children, className, iconAttrs, iconVerticalAlign, iconViewBox, size, title, ...otherProps} = props

    const iconProps: React.SVGProps<SVGSVGElement> = {
      viewBox: iconViewBox,
      height: props.height !== undefined ? props.height : size,
      width: props.width !== undefined ? props.width : size,
      'aria-hidden': title == null ? 'true' : undefined,
      focusable: 'false',
      role: title != null ? 'img' : undefined,
      ...iconAttrs,
      ...otherProps,
    }

    const baseClassName = css({
      display: 'inline-block',
      verticalAlign: iconVerticalAlign,
      overflow: 'hidden',
    })

    return (
      <svg {...iconProps} className={className ? `${baseClassName.name} ${className}` : baseClassName.name} ref={ref}>
        {title && <title key="icon-title">{title}</title>}
        {children}
      </svg>
    )
  },
)
