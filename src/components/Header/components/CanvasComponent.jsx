import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export const CanvasComponents = ({
    Content,
    target=[0,0,0]
}) => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight 
                    color={'white'}
                    intensity={1}
                />
                <directionalLight color="white" position={[0, 0, 2]} />
                {Content}
                <OrbitControls
                    minDistance={3}
                    maxDistance={7}
                    target={target}
                />
            </Suspense>
        </Canvas>
    )
}