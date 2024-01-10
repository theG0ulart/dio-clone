
import {MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Column, Container, ChangePassword, CreateAccount, ErrorText, Row, Title, TitleLogin, SubtitleLogin, Wrapper } from './styles'

const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.number().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()


const Login = () => {

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
      });

      console.log(isValid, errors)

      const onSubmit = (data) => console.log(data)


    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>  

                </Title>   
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" control={control}  errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<MdLock />}/>
                        <Button title="Enviar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <ChangePassword>Recover Password</ChangePassword>
                        <CreateAccount>Create Account</CreateAccount>
                    </Row>
                </Wrapper>            
            </Column>
        </Container>
    </>
    )
}

export { Login }