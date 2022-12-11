import { LoginWrapper, LoginTitle, LoginForm } from "./login.styles"
import React, { useRef } from "react"
import { Input } from "../../components/Input/Input.component"
import { ButtonSubmitter } from "../../components/Button/Button.component"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const adminEmail = useRef()
    const adminPassword = useRef()
    const navigate = useNavigate()

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        console.log(adminEmail.current.value);
        console.log(adminPassword.current.value);
        window.localStorage.setItem('isAdmin', true);
        navigate('/')
    }

    return (
        <>
            <LoginWrapper>
                <LoginTitle>Login</LoginTitle>
                <LoginForm onSubmit={handleFormSubmit}>
                    <Input ref={adminEmail} type='text' placeholder="User name" name="user_name" />
                    <Input ref={adminPassword} type='password' placeholder="Password" name="user_password" />
                    <ButtonSubmitter />
                </LoginForm>
            </LoginWrapper>
        </>
    )
}
