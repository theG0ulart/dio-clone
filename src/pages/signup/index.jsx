
import {MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Column, Container, ChangePassword, CreateAccount, ErrorText, Row, Title, TitleSignup, SubtitleSignup, Wrapper } from './styles'

const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    nome: yup.string().required('Campo obrigatório'),
    password: yup.number().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  })
  .required()


const SignUp = () => {

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

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>  
                    A plataforma para você aprender com experts, dominar as principais
                    tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>   
            </Column>
            <Column>
                <Wrapper>
                    <TitleSignup>Comece agora grátis</TitleSignup>
                    <SubtitleSignup>Crie sua conta e make the change._</SubtitleSignup>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" control={control}  errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar sua conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <SubtitleSignup>
                            Ao clicar em "criar minha conta grátis",
                            declaro que aceito as políticas de Privacidade e os
                            Termos de Uso da DIO.
                        </SubtitleSignup>
                        
                    </Row>
                </Wrapper>            
            </Column>
        </Container>
    </>
    )
}

export { SignUp }