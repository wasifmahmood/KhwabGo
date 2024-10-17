import React from 'react'
import Image from 'next/image'
import main from '../../../assests/images/main.png'

const Main = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <h1 style={{ position: 'absolute', zIndex: 10, color: 'white', top: '20px', left: '20px' }}>
        Home
      </h1>
      <span>
        <Image
          src={main}
          alt="Main Image"
          layout="fill" 
          objectFit="cover"
          quality={100}
        />
      </span>
    </div>
  )
}

export default Main
