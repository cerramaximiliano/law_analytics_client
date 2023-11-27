import Laboral from "../components/Display/LaboralDisplay/LaboralDisplay";
import Civil from "../components/Display/CivilDisplay/CivilDisplay";
import Previsional from "../components/Display/PrevisionalDisplay/PrevisionalDisplay";
import Interes from "../components/Display/InteresDisplay/InteresDisplay";

export default function useDisplayComponent(display) {
    switch (display) {
      case "laboral":
        return <Laboral/>;
      case "previsional":
        return <Previsional/>;
      case "civil":
        return <Civil/>;
      case "interes":
        return <Interes/>;
      default:
        return <div>Contenido por defecto</div>;
    }
  }