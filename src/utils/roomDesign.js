import { DesignOne, DesignTwo, DesignThree } from "../components/Design";

function getDesignComponent(design, mode) {
  switch (design) {
    case "Design_1":
      return <DesignOne mode={mode} />;
    case "Design_2":
      return <DesignTwo mode={mode}/>;
    case "Design_3":
      return <DesignThree mode={mode}/>;
    default:
      return <DesignOne mode={mode}/>;
  }
}

export default getDesignComponent;
