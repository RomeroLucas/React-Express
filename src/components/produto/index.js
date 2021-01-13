
export default function Produto(props) {
    
    return(
        <span>
            <ul>
            
                    <li>Categoria: {props.dados.categoria}</li>
                    <li>nome: {props.dados.nome}</li>
                    <li>valor: R$ {props.dados.valor}</li>
                
            </ul>
        </span>
    )
}