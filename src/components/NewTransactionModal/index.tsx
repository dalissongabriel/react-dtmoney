import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImage from '../../assets/close.svg';
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import React, { FormEvent, useState } from "react";
import { api } from "../../services/api";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()=>void;
}

export function NewTransactionModal({
        isOpen,
        onRequestClose
    }:NewTransactionModalProps) {
    
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("deposit");

    function handleNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title, 
            value,
            category,
            type
        };

        api.post("/transactions", data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                className="react-modal-close"
                type="button"
                onClick={onRequestClose}>
                <img src={closeImage} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={({target}) => setValue(Number(target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green">

                        <img src={incomeImage} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red">

                        <img src={outcomeImage} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={({target}) => setCategory(target.value)}
                />

                <button type="submit">Cadastrar</button>


            </Container>
      </Modal>
    )
}