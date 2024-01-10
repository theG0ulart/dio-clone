import React from "react";
import { Button } from '../Button'
import  dioLogo  from '../../assets/logo-dio.png';

import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={dioLogo} alt="Logo da dio" />
                    <SearchInputContainer>
                        <Input placeholder="Buscar..."/>
                    </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }