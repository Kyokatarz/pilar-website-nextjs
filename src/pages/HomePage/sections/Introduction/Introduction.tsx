import Image from 'next/image'
import HTMLParser from 'react-html-parser'

import SubSectionHeader from '@/components/SubSectionHeader'
import Paragraph from '@/components/Paragraph'
import Article from '@/components/Article'
import Section from '@/components/Section'
import TheUgly from '@/../public/assets/foto-horizontal.jpg'
import getDictionary from '../../../../dictionaries/getDictionary'
import RichText from '../../../../components/RichText'

const Introduction = ({ lang }: { lang: string }) => {
  const dictionary = getDictionary(lang)
  return (
    <Section id='landing-introduction'>
      <div className='flex items-center justify-center mb-6 max-w-sm flex-col'>
        <Image
          src={TheUgly}
          alt=''
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <Article>
        <header>
          <h1 className='text-4xl text-black mb-6 text-center '>
            <span>PILAR MIRALLES</span> <br />
            <span className='text-2xl italic text-gray-600'>
              {dictionary.page.home.introduction.jobTitle}
            </span>
          </h1>
        </header>

        <SubSectionHeader id='statement' level={2}>
          {dictionary.page.home.introduction.paragraph.artistStatement.header}
        </SubSectionHeader>
        <Paragraph className='mb-12'>
          <RichText>
            {
              dictionary.page.home.introduction.paragraph.artistStatement
                .richTextContent
            }
          </RichText>
        </Paragraph>

        <SubSectionHeader level={2}>Acknowledgments</SubSectionHeader>
        <Paragraph>
          Thanks to Jean-Paul Sartre for <span className='italic'>Nausea</span>,
          John Kennedy Toole for{' '}
          <span className='italic'>A Confederacy of Dunces</span>, John
          Steinbeck for <span className='italic'>The Grapes of Wrath</span>, and
          José Luis Sampedro for{' '}
          <span className='italic'>El río que nos lleva</span>.
          <br />
          <br />
          Thanks to Galina Ustvolskaya, the truest composer, and to Éliane
          Radigue, Eva-Maria Houben and Jakob Ullmann, for defying the immediacy
          era.
          <br />
          <br />
          Thanks to Dada (
          <em>
            dada m'dada, dada m'dada dada mhm, dada dera dada, dada Hue, dada
            Tza
          </em>
          ). Thanks to Fluxus.
          <br />
          <br />
          Thanks to Mayakovsky{' '}
          <span className='italic'>
            …the boat of love crashed into everyday life…
          </span>{' '}
          (last letter, 1930).
          <br />
          <br />
          Thanks to all artists who feel or have felt the oppression that is
          normally exerted on those who express the freedom of their
          consciousness.
        </Paragraph>
        <br />
        <br />
        <p className={'italic text-left'}>
          This open-source website has been kindly designed and developed by{' '}
          <a
            href='https://fi.linkedin.com/in/giang-tran97'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            Giang Tran{' '}
          </a>
          <span className='not-italic'>😎</span>. Still a work in progress!
        </p>
      </Article>
    </Section>
  )
}

export default Introduction
