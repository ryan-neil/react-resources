import { useState } from 'react'
import { Billing } from './Billing'

export const Form = () => {
  const [data, setData] = useState({
    billFirstName: '',
    billLastName: '',
    billAddress1: '',
    billAddress2: '',
    billCity: '',
    billState: '',
    billZipCode: '',
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(JSON.stringify(data))
  }

  const handleChange = (e: any) => {
    const { type, name } = e.target
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    setData((prev) => ({ ...prev, [name]: value }))
  }

  // all fields are required except the 2nd address line
  const { billAddress2, ...other } = data
  // this would not be true if any one of the field values were empty
  const isEnabled = [...Object.values(other)].every(Boolean)

  const content = (
    <form onSubmit={handleSubmit}>
      <h2>Billing Info</h2>
      <Billing data={data} handleChange={handleChange} />
      <button disabled={!isEnabled}>Submit</button>
    </form>
  )

  return content
}
