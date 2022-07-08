import React from 'react'

function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
        {
            options.map((value, index) => (
                <option key={index} value={value}>{value}</option>
            ))
        }
    </select>
  )
}

export default Select