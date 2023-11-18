import React from 'react'
import InputField from '../components/inputField'
import DropDownInput from '../components/dropDownInput'
import Button from '../components/Button'
import Text from '../components/Text'

export default function AccountCreation1() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]
  const days = []
  for (let i = 1; i < 32; i++) {
    days.push(i)
  }
  const years = []
  for (let i = 2023; i > 1900; i--) {
    years.push(i)
  }

  return (
    <div className="bg-neutral-1000 h-screen px-[15px] gap-3">
      <section className="flex py-3 px-0 items-center gap-5 self-stretch">
        <a href="/src/Login/index.html">
          <img src="../../public/create-account-1-signup-x.svg" alt="signup" className="w-6 h-6" />
        </a>
        <div className="text-neutral-50 font-Inter text-[15px] not-italic font-bold leading-normal">Step 1 of 4</div>
      </section>
      <section className="flex flex-col items-start gap-5 self-stretch">
        <Text text = "Create your account" size = "2xl" color = "neutral-50" font="bold"/>
        <section className="flex flex-col items-center gap-8 self-stretch">
          <InputField inputField="Name" inputType = "text"  width = "full"/>
          <InputField inputField="Email" inputType = "text" width = "full"/>
          <section className="flex flex-col items-start gap-2 self-stretch">
            <Text text = "Date of birth" size = "[15px]" color='neutral-50' font="bold"/>
            <div className='text-dfb text-[14px]'>
            <Text size = "[14px]" font = "normal">
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </Text></div>
          </section>
          <section className="w-full grid-cols-4 gap-3 flex">
            <DropDownInput inputField="Month" options={months} width = "full" size="xs"/>
            <DropDownInput inputField="Day" options={days} width = "full"/>
            <DropDownInput inputField="Year" options={years} width = "full"/>
          </section>
        </section>
      </section>
      <section className="flex flex-col justify-end items-center gap-[10px] self-stretch pt-20 px-5 pb-0">
        <a href="/src/Login/create-account-step-2.html" className='w-[334px] flex justify-center my-10'>
          <Button variant="default" width='full'>
            <Text text = "Create account" size="[16px]" font="bold" color="neutral-1000"/>
          </Button>
        </a>
      </section>
    </div>
  )
}
