import { IComponentContent } from "src/interfaces";

export default function Price(props: IComponentContent){
  return <p>Preço: {props.children}</p>
}