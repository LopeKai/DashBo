<Stepper alternativeLabel activeStep={step}>
{childrenArray.map((label) => (
    <Step key={label}>
        <StepLabel>{label}</StepLabel>
    </Step>
))}
</Stepper>


/*-------------------------------*/

import React from 'react'
import { useState } from 'react'
import { Button, Card, CardContent, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import { Formik, Form } from "formik"

import { Login } from './Form/Login'
import { YourInfos } from './Form/YourInfos'
import { Setups } from './Form/Setups'
import { PaymentSetup } from './Form/PaymentSetup'
import { BankInformation } from './Form/BankInformation'
import { SupportTheMerchantCreation } from './Form/SupportTheMerchantCreation'
import { ConfirmationTerms } from './Form/PolicyAndAgreement/ConfirmationTerms'
import { ConfirmationOfAllDocuments } from './Form/PolicyAndAgreement/ConfirmationOfAllDocuments'
import { WelcomeActivationKit } from './Form/PolicyAndAgreement/WelcomeActivationKit/WelcomeActivationKit'
import { Box } from '@mui/system'

export function Quiz() {
    const [dealer, setDealer] = useState(false)

    function isDealer() {
        setDealer(true)
    }

    function notADealer() {
        setDealer(false)
    }

    return (
        <section className="">
            <Card className="overflow-visible bg-[#fff] p-10 rounded-3xl drop-shadow-2xl shadow-[#00000029] min-h-[700px]">
                <CardContent>
                    <FormikStepper label="More Info" notADealer={notADealer} isDealer={isDealer} initialValues={{
                        name: '',
                        address: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        phoneNumber: '',
                        email: '',
                        website: '',
                        paymentPayInFullOrPayWeekly: false,
                        bankName: '',
                        routingName: '',
                        accountNumber: ''

                    }} onSubmit={(values) => { console.log(values) }}
                    >
                        <Box paddingBottom={2}>
                            <YourInfos />
                        </Box>

                        {
                            dealer &&
                            <Box>
                                <Login />
                            </Box>
                        }

                        <Box paddingBottom={2}>
                            <Setups />
                        </Box>

                        <Box paddingBottom={2}>
                            <PaymentSetup />
                        </Box>

                        <Box paddingBottom={2}>
                            <BankInformation />
                        </Box>

                        {/* <Box paddingBottom={2}>
                            <SupportTheMerchantCreation />
                        </Box>

                        <Box paddingBottom={2}>
                            <ConfirmationTerms />
                        </Box>

                        <Box paddingBottom={2}>
                            <ConfirmationOfAllDocuments />
                        </Box>

                        <Box paddingBottom={2}>
                            <WelcomeActivationKit />
                        </Box> */}

                    </FormikStepper>
                </CardContent>
            </Card>
        </section>
    )
}

// export function FormikStep({ children }) {
//     return <>{children}</>
// }


export function FormikStepper({ label, notADealer, isDealer, children, ...props }) {

    const childrenArray = React.Children.toArray(children)
    const [step, setStep] = useState(0)
    const currentChild = childrenArray[step]

    function isLastStep() {
        return step === childrenArray.length - 1
    }

    return (
        <Formik {...props} onSubmit={async (values, helpers) => {
            if (isLastStep()) {
                await props.onSubmit(values, helpers)
            } else {
                setStep(s => s + 1)
            }
        }}>
            <Form>
                <div className="grid grid-cols-[376px,1fr] gap-4 border">
                    <div className="border">
                        <Stepper alternativeLabel activeStep={step} orientation="vertical">
                            {childrenArray.map((child) => (
                                <Step key={child.props.label}>
                                    <StepLabel>{child.props.label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                    {currentChild}
                </div>

                <div className="flex items-center justify-between mt-5">

                    {step > 0 ?
                        <Button variant="contained" className="w-1/4 justify-self-end bg-primary hover:bg-secundary text-[#fff] p-4 shadow-lg shadow-gray-500/40" onClick={() => setStep(s => s - 1)}>Back</Button>
                        :
                        null
                    }

                    {
                        step === 0 ?
                            <div className="w-full flex justify-center gap-20">
                                <Button onClick={isDealer} variant="contained" type="submit" className="w-1/4 justify-self-center bg-primary text-lg text-[#fff] p-4 hover:bg-secundary shadow-lg shadow-gray-500/40">
                                    DEALER
                                </Button>
                                <Button onClick={notADealer} variant="contained" type="submit" className="w-1/4 justify-self-center bg-primary text-lg text-[#fff] p-4 hover:bg-secundary shadow-lg shadow-gray-500/40">
                                    RESTAURANT
                                </Button>
                            </div >
                            :
                            <Button variant="contained" type="submit" className="w-1/4 justify-self-center bg-primary text-[#fff] p-4 hover:bg-secundary shadow-lg shadow-gray-500/40">
                                {isLastStep() ? 'Submit' : 'Next'}
                            </Button>
                    }
                </div>
            </Form>
        </Formik >
    )
}