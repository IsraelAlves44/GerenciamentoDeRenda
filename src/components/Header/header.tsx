import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoneyLogo" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}