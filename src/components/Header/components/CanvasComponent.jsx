import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"

export const CanvasComponents = ({
    Content,
    target=[0,0,0],
    rotateLateralidad
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
                    autoRotate={true}
                    autoRotateSpeed={rotateLateralidad}
                    enableZoom={false}
                    enableRotate={false}
                    target={target}
                    enablePan={false}
                />
            </Suspense>
        </Canvas>
    )
}