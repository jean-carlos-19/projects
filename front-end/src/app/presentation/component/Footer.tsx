import React from 'react'
import {Title_1,Small_Paragraph} from '@project/presentation/element'

const Footer = () => {
  return (
    <footer className='footer bg-col-black-200'>
      <section className='social-media'>
        <header>
        <Title_1 css={'text-color-white-200 '} name={'Social Medila'} />
        </header>
        <ul className='list'>
          <li>
            <Small_Paragraph css={'text-color-white-200'} name={'Instgram'} />
          </li>
          <li>
            <Small_Paragraph css={'text-color-white-200'} name={'Linkedin'} />
          </li>
          <li>
            <Small_Paragraph css={'text-color-white-200'} name={'Githubº'} />
          </li>
        </ul>
      </section>
      <section className='owner'>
        <Title_1 css={'text-color-white-200'} name={'{};'} />
        <Title_1 css={'text-color-white-200'} name={'PiguaveSoft'} />
      </section>
    </footer>
  )
}

export  {Footer}
