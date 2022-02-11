import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./App.css";
const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};
const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">SIMLOG</h1>
      <h2 className="header">Simulateur de la Manoeuvre Logistique</h2>
      L’objectif du SIMLOG est de présenter la manœuvre logistique au sein d’un
      environnement simuler dans l’objectif de : - Visualiser la manœuvre dans
      sa globalité - Pouvoir identifier les positions futures des unités sur la
      carte - Générer les bilans logistiques (SAN – MEC – RAV) - Suivre en temps
      réel (simulé) l’évolution des unités selon le cadre Espace/Temps.
      <h4 className="title">Situation</h4>
      Il s’agit de paramétrer la manœuvre logistique selon la situation (OrdOp +
      …)
      <h4 className="title">Terrain</h4>
      Projection des unités et les différentes lignes sur la carte de la zone de
      manœuvre
      <h4 className="title">Cadre Espace/Temps</h4>
      Projection de l’évolution des différentes unités selon le cadre E/T et
      simulation de l’évolution du temps
    </Container>
  </Container>
);
export default App;
