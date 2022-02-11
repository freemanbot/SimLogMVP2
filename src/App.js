import React from "react";

import Container from "react-bootstrap/Container";
import terrain from "./terrain.png"; // Tell webpack this JS file uses this image

import "./App.css";

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
      <img src={terrain} alt="Logo" />
      <h4 className="title">Cadre Espace/Temps</h4>
      Projection de l’évolution des différentes unités selon le cadre E/T et
      simulation de l’évolution du temps
    </Container>
  </Container>
);
export default App;
