import { Container } from "./style";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 2.000,00</td>
                        <td>Venda</td>
                        <td>10/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 700,00</td>
                        <td>Fixo</td>
                        <td>18/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}