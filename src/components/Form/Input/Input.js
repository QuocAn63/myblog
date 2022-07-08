import React from 'react'

function Input({ register, name, ...rest}) {
  return (
    <input {...register(name)} {...rest} />
  )
}

export default Input