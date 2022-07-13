import React from 'react'

interface btn {
    label: string,
    handleClick: () => void

}
const Button = (prop:btn) => {
    const {label, handleClick} = prop
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button