import React from 'react'

import HomePage from '../../pages/HomePage'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const LangRoot = ({ params: { lang } }: { params: { lang: string } }) => {
  const allowedLangs = ['en', 'es']

  if (allowedLangs.includes(lang)) {
    return <HomePage />
  }

  const preferredLangs = headers().get('Accept-Language')
  const firstPreferredLang = preferredLangs?.split(',')[0]
  const firstPreferredLangWithoutRegion = firstPreferredLang?.split('-')[0]

  if (firstPreferredLang && !allowedLangs.includes(firstPreferredLang)) {
    redirect(`/${firstPreferredLangWithoutRegion}/`)
  }
}

export default LangRoot
