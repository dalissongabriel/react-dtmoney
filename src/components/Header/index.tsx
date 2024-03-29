import { Container, Content } from "./style";

import logo from "../../assets/logo.svg";
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button 
                    type="button"
                    onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            
            </Content>
        </Container>
    )
}