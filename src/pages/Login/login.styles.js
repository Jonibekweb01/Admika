import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: teal;
`

export const LoginTitle = styled.h1`
    text-align: center;
    color: #fff;
    margin: 0 0 20px 0;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`