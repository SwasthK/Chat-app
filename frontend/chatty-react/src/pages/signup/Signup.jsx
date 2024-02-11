import React from 'react'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'

const signup = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 border-2 p-6 rounded-lg flex flex-col">
    <h1 className="text-center text-2xl font-bold mb-5">Signup</h1>
    <Input placeholder="your fullname" id="fullname"></Input>
    <Input placeholder="your username" id="username"></Input>
    <Input placeholder="your password" id="password"></Input>
    <Input placeholder="confirm password" id="cpassword"></Input>
    <a href="#" className="font-normal text-blue-600 hover:underline">already logged? please login</a>
    <Button text="signup"></Button>
  </div>
  )
}

export default signup