import React from 'react'

const DisplayData = () => {
    const car = {
        name: 'My car',
        imageUrl: 'https://i.imgur.com/Gxn4mf0.jpeg',
      };

  return (
    <>
        <h1>{car.name}</h1>
        <img
          className="car"
          src={car.imageUrl}
          alt={'Photo of ' + car.name}
          style={{
            width: 952,
            height: 681
          }}
        />
      </>
  )
}

export default DisplayData