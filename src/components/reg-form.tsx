import React, { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import styled from 'styled-components'

import { Input } from '../ui/input/input'
import { Button } from '../ui/button/button'
import { Link } from '../ui/link/link'
import { P4 } from '../assets/styles/texts'

import { Routes } from '../constants/routes'

import { useAppSelector } from '../hooks/store'
import { authSelectors } from '../store/auth/auth-selectors'

import { regSchema } from '../utils/validation/reg-schema'

import type { SignUp } from '../models/signup-model'

const defaultRegFormValues = {
  email: '',
  password: '',
  repeatPassword: ''
}

type Props = {
  onSubmitForm: (data: SignUp) => void
}

export const RegForm = (props: Props) => {
  const signUpError = useAppSelector(authSelectors.getSignUpError)
  const { onSubmitForm } = props

  const {
    register,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<SignUp>({
    defaultValues: defaultRegFormValues,
    mode: 'onBlur',
    criteriaMode: 'all',
    resolver: yupResolver(regSchema)
  })

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const onSubmit: SubmitHandler<SignUp> = (data) => {
    onSubmitForm(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input placeholder='Email' {...register('email')} errorOn={!!errors.email} />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Input placeholder='Password' {...register('password')} errorOn={!!errors.password} />
        {errors.password && <Error $topSize={124}>{errors.password.message}</Error>}

        <Input placeholder='Repeat password' {...register('repeatPassword')} errorOn={!!errors.repeatPassword} />
        {errors.repeatPassword && <Error $topSize={190}>{errors.repeatPassword.message}</Error>}
      </InputContainer>

      <ButtonContainer>
        <Button type='submit' disabled={!isDirty || !isValid || isSubmitting}>
          Sign up
        </Button>
        <Link to={Routes.SIGNIN}>Log in</Link>
        {signUpError && <Error $topSize={110}>{signUpError}</Error>}
      </ButtonContainer>
    </Form>
  )
}

const Form = styled.form`
  width: 100%;
  max-width: 380px;
  min-width: 340px;
  height: 100%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
  padding: 20px 0;
`

const InputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 246px;
  padding-top: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  position: relative;
  padding-top: 35px;
  align-items: center;

  :last-child {
    text-align: center;
  }
`

const Error = styled(P4)<{ $topSize: number }>`
  color: ${(props) => props.theme.text.error};
  position: absolute;
  top: ${({ $topSize = '57px' }) => (typeof $topSize === 'string' ? $topSize : `${$topSize}px`)};
  left: 12px;
`
