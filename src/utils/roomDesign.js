import { DesignOne, DesignTwo, DesignThree } from "../components/Design";

function getDesignComponent(design) {
  switch (design) {
    case "Design_1":
      return <DesignOne></DesignOne>;
    case "Design_2":
      return <DesignTwo></DesignTwo>;
    case "Design_3":
      return <DesignThree></DesignThree>;
    default:
      return <DesignOne></DesignOne>;
  }
}

export default getDesignComponent;
