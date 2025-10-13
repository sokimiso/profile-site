import { FlowMaterial } from "./components/Background";
import { Object3DNode } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      flowMaterial: Object3DNode<InstanceType<typeof FlowMaterial>, typeof FlowMaterial>;
    }
  }
}
