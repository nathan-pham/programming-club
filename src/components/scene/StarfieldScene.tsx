import { Canvas, useFrame } from "@react-three/fiber";

import Stars from "./Stars";

const StarfieldScene = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[-1]">
            <Canvas>
                <Stars starsCount={5000} />
            </Canvas>
        </div>
    );
};

export default StarfieldScene;
