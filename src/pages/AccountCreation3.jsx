import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'
import Input from '../components/inputField'

export default function AccountCreation3() {
  return (
    <>
    <div className="h-screen bg-neutral-1000 px-[15px] gap-3">
        <section className="flex py-3 px-0 items-center gap-5 self-stretch">
            <a href="/src/Login/create-account-step-2.html">
                <img src="../../public/create-account-1-signup-x.svg" alt="signup" className="w-6 h-6" />
            </a>
            <Text color="neutral-50" font="bold">Step 3 of 4</Text>
        </section>
        <section className="flex flex-col items-start gap-5 self-stretch">
            <section className="flex flex-col gap-2">
                <Text text="We sent you a code" color='neutral-50' size="2xl" font="bold" />
                <Text color="neutral-500" size="sm">
                    Enter it below to verify janedoe@gmail.com
                </Text>
            </section>
            <section className="flex flex-col items-end gap-3 self-stretch">
                <Input inputField="Verification code" inputType = "text" width = "full"/>
                <button className="text-twitterblue-default font-Inter text-sm not-italic font-normal leading-normal hover:text-twitterblue-hover">
                    Didn’t receive a code?
                </button>
            </section>
        </section>
        <section className="flex flex-col justify-start items-center gap-[10px] self-stretch pt-20 px-5 pb-0">
            <a href="/src/Login/create-account-step-4.html" className="w-[334px]">
                <Button variant='default' width='full'>
                    <Text text="Next" color="neutral-1000" font="bold" />
                </Button>
            </a>
        </section>
    </div>

    </>
  )
}
