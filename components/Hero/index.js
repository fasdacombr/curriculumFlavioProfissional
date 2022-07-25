import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className='md:grid lg:grid-cols-2 lg:pt-16 leading-none'>
      <div className='pt-16 lg:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Olá! Sou </h1>
        <h2 className='text-4xl font-bold lg:text-5xl uppercase pl-16'>Flávio Augusto Simões de Almeida</h2>
        <ContactMe />
      </div>
      <div><img src='/images/Flavio.png' /></div>
    </div>
  )
}
export default Hero
