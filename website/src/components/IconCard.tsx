import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react'
import copy from 'copy-to-clipboard'
import {EmotionIcon} from 'emotion-icons/types'

const importMap: any = {
  bootstrap: import('emotion-icons/bootstrap'),
  'boxicons-logos': import('emotion-icons/boxicons-logos'),
  'boxicons-regular': import('emotion-icons/boxicons-regular'),
  'boxicons-solid': import('emotion-icons/boxicons-solid'),
  crypto: import('emotion-icons/crypto'),
  entypo: import('emotion-icons/entypo'),
  'entypo-social': import('emotion-icons/entypo-social'),
  'evaicons-outline': import('emotion-icons/evaicons-outline'),
  'evaicons-solid': import('emotion-icons/evaicons-solid'),
  evil: import('emotion-icons/evil'),
  'fa-brands': import('emotion-icons/fa-brands'),
  'fa-regular': import('emotion-icons/fa-regular'),
  'fa-solid': import('emotion-icons/fa-solid'),
  feather: import('emotion-icons/feather'),
  'fluentui-system-filled': import('emotion-icons/fluentui-system-filled'),
  'fluentui-system-regular': import('emotion-icons/fluentui-system-regular'),
  foundation: import('emotion-icons/foundation'),
  'heroicons-outline': import('emotion-icons/heroicons-outline'),
  'heroicons-solid': import('emotion-icons/heroicons-solid'),
  icomoon: import('emotion-icons/icomoon'),
  'ionicons-sharp': import('emotion-icons/ionicons-sharp'),
  'ionicons-solid': import('emotion-icons/ionicons-solid'),
  'ionicons-outline': import('emotion-icons/ionicons-outline'),
  material: import('emotion-icons/material'),
  'material-outlined': import('emotion-icons/material-outlined'),
  'material-rounded': import('emotion-icons/material-rounded'),
  'material-sharp': import('emotion-icons/material-sharp'),
  'material-twotone': import('emotion-icons/material-twotone'),
  'open-iconic': import('emotion-icons/open-iconic'),
  octicons: import('emotion-icons/octicons'),
  'remix-fill': import('emotion-icons/remix-fill'),
  'remix-line': import('emotion-icons/remix-line'),
  'simple-icons': import('emotion-icons/simple-icons'),
  typicons: import('emotion-icons/typicons'),
  zondicons: import('emotion-icons/zondicons'),
}

function useIsMounted() {
  const isMounted = useRef(false)
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  return isMounted
}

interface Props {
  pack: string
  name: string
}

export const IconCard: React.SFC<Props> = ({name, pack}) => {
  const isMounted = useIsMounted()
  const [copied, setCopied] = useState(false)
  const iconImport = useMemo(() => `@emotion-icons/${pack}/${name}`, [pack, name])
  const [Icon, setIcon] = useState<EmotionIcon | null>(null)

  const copyCallback = useCallback(() => {
    copy(iconImport)
    setCopied(true)

    setTimeout(() => {
      if (isMounted.current) {
        setCopied(false)
      }
    }, 2000)
  }, [iconImport, isMounted])

  useEffect(() => {
    importMap[pack].then((packImport: any) => {
      setIcon(packImport[name])
    })
  }, [name, pack])

  return (
    <div className="icon-card" onClick={copyCallback}>
      <div>{Icon ? <Icon size="48" title={`${name} icon`} /> : null}</div>
      <div className="name">{name}</div>
      <code>{copied ? 'Copied!' : iconImport}</code>
    </div>
  )
}
