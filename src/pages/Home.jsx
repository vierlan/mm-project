import React from 'react'
import '../assets/stylesheets/home.css'

function Home() {
  const [inputValue, setInputValue] = React.useState('')

  function handleSetInput(value) {
    console.log(value)
  }
  return (
    <div className='background-image-container'>
      <img className='background-image'src="/src/assets/images/1.jpg" alt="" />

      <div className='input-container'>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What's this input for?..."
        />
      </div>
    </div>
  )
}

export default Home
