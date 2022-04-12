import styled from 'styled-components'

export const Container = styled.section`
  max-width: 700px;
  //box-shadow: 0px 0px 10px 0px #7c7c7c;
  margin: 0 auto;
`

export const Header = styled.header`
  h1{
    margin-top: 30px;
    text-align: center;
    text-shadow: 0 0 0 3 #fff;
  }
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border-radius: 3px;
    border: none;
    padding: 10px;
    width: 300px;
    height: 30px;
    box-shadow: 0 0 9px 0px #585858;
    margin-right: 10px;
  }
  button {
    cursor: pointer;
    padding: 7px 10px;
    border: none;
    border-radius:3px;
    margin-left: 5px;
  }
  .currentLocation{
    padding: 4px;
    svg{
      width: 18px;
      height: 18px 
    }
  }
`
export const Error = styled.h1`

`

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #d9d9d9;
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 9px 0px #585858;
  div{
    padding: 10px;
  }
  img{
    width: 150px;
  }
`