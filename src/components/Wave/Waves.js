import React from "react";
import "./Waves.scss";
import Temple from "./../../assets/images/image6.png";
const Waves = () => {
  return (
    <section className="sound-section">
      <div className="sound-wrapper">
        <div className="inner-title">
          <h3>
            Le son de la grande montagne qui <br></br>craque. Le son des vagues
            dans <br></br>
            l'océan
          </h3>
        </div>

        <div className="js-ink-trigger c-transition image-sound-container">
          <img
            className="c-transition__img"
            src={Temple}
            alt="Lovers under the moon"
          />
          >
        </div>
        <div className="image-flag">
          <p className="trcb">lmdq</p>
        </div>
      </div>
      <div className="text-sound-container">
        <p className="text-wave">
          Entendre le son de l’océan dans l’Himalaya... Ce projet improbable
          mène une cinéaste et ses trois filles à Gyütö, un monastère bouddhiste
          tibétain haut perché qui résonne jour et nuit au son hypnotisant des
          chants de méditation, “qui sonnent comme les vagues dans l’océan”
        </p>
        <p className="text-wave">
          Promenant librement leur curiosité, elles découvrent la vie
          quotidienne des 400 moines qui y vivent. Au fil des jours, le dialogue
          s’installe et la complicité grandit. La réalité bouddhiste se révèle
          de manière inédite, dans la spontanéité des questions et dans la
          sensibilité des perceptions à hauteur d’enfant, sans prosélytisme.
        </p>
      </div>
    </section>
  );
};

export default Waves;
