import { useHistory } from "react-router"
import logo from "../../assets/images/logosportik.png"
import { Container } from "./styles"

export const Header = () => {

    const history = useHistory();

    return (
        <Container>
            <img src={logo} alt="logo" onClick={() => history.push("/")} title="Home" />
            <ul>
                <li onClick={() => history.push("/treinos")}>Treinos</li>
                <li  onClick={() => history.push("/suplementacao")}>Suplementação</li>
                <li title="Em desenvolvimento...">Alimentos</li>
                <li onClick={() => history.push("/imc")}>Calcular IMC</li>
            </ul>
        </Container>
    )
}