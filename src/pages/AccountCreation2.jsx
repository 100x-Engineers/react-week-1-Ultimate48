import React from 'react'
import InputField from '../components/inputField'
import Text from '../components/Text'
import Button from '../components/Button'

export default function AccountCreation2() {
  return (
    <div className="h-screen bg-neutral-1000 px-[15px] gap-3">
        <section className="flex py-3 px-0 items-center gap-5 self-stretch">
            <a href="/src/Login/create-account-step-1.html">
            <img src="../../public/create-account-1-signup-x.svg" alt="signup" className="w-6 h-6" />
            </a>
            <div className="text-neutral-50 font-Inter text-[15px] not-italic font-bold leading-normal">Step 2 of 4</div>
        </section>
        <section className="flex flex-col items-start gap-5 self-stretch">
            <Text text = "Create your account" size = "2xl" color = "neutral-50" font="bold"/>
            <section className="flex flex-col items-center gap-8 self-stretch">
                <InputField inputField="Name" inputType = "text"  width = "full"/>
            <InputField inputField="Email" inputType = "text" width = "full"/>
            <InputField inputField="Date of birth" inputType = "text" width = "full"/>
            </section>
        </section>
        <section className="flex flex-col justify-end items-center gap-[10px] self-stretch pt-20 px-5 pb-0">
            <a href="/src/Login/create-account-step-3.html" className='w-[334px] h-full'>
            <Button variant="default" width='full' bg_color='twitterblue-default' hoverColor='twitterblue-hover' exClasses="py-5">
                <Text text = "Sign up" size="[16px]" font="bold" color="neutral-50"/>
            </Button>
            </a>
        </section>  
    </div>
  )
}
