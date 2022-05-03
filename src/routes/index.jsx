import { Switch, Route } from "react-router";
import { ExPeito } from "../pages/ExPeito";
import { ExCostas } from "../pages/ExCostas";
import { Home } from "../pages/Home"
import { Treinos } from "../pages/Treinos";
import { ExOmbros } from "../pages/ExOmbro";
import { ExPernas } from "../pages/ExPerna";
import { ExPanturrilhas } from "../pages/ExPanturrilha";
import { ExTriceps } from "../pages/ExTriceps";
import { ExGluteo } from "../pages/ExGluteo";
import { ExBiceps } from "../pages/ExBiceps";
import { ExAbdominal } from "../pages/ExAbdominal";
import { MontarDieta } from "../pages/MontarDieta";
import { Imc } from "../pages/Imc";
import { SplineObj } from "../pages/Suplementacao";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/treinos">
                <Treinos />
            </Route>

            <Route path="/expeito">
                <ExPeito />
            </Route>

            <Route path="/excostas">
                <ExCostas />
            </Route>

            <Route path="/exombros">
                <ExOmbros />
            </Route>

            <Route path="/expernas">
                <ExPernas />
            </Route>

            <Route path="/expanturrilhas">
                <ExPanturrilhas />
            </Route>

            <Route path="/extriceps">
                <ExTriceps />
            </Route>

            <Route path="/exgluteo">
                <ExGluteo />
            </Route>

            <Route path="/exbiceps">
                <ExBiceps />
            </Route>

            <Route path="/exabdominal">
                <ExAbdominal />
            </Route>

            <Route path="/montardieta">
                <MontarDieta />
            </Route>

            <Route path="/imc">
                <Imc />
            </Route>

            <Route path="/suplementacao">
                <SplineObj />
            </Route>

        </Switch>
    )
}