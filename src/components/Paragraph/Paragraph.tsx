import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

const Paragraph = ({ children, className }: Props) => {
  return <p className={clsx('text-justify', className)}>{children}</p>
}

export default Paragraph
