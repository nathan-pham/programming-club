import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

import random from "../../utils/random";

interface StarsProps {
    starsCount: number;
}

const Stars = ({ starsCount }: StarsProps) => {
    const state = useThree();
    const pointsRef = useRef<THREE.Points>(null);

    const stars = useMemo(() => {
        const p = new Array(starsCount)
            .fill(0)
            .map(() => (0.5 - Math.random()) * 20);

        return new THREE.BufferAttribute(new Float32Array(p), 3);
    }, [starsCount]);

    const starProps = useMemo(
        () =>
            new Array(starsCount).fill(0).map(() => ({
                vel: 0,
                acc: 0.0001,
            })),
        [starsCount]
    );

    useFrame(() => {
        starProps.forEach((p, i) => {
            p.vel += p.acc;
            stars.setXYZ(
                i,
                stars.getX(i),
                stars.getY(i),
                stars.getZ(i) + p.vel
            );

            if (stars.getZ(i) > state.camera.position.z) {
                stars.setXYZ(i, stars.getX(i), stars.getY(i), -1);
                starProps[i].vel = 0;
            }
        });

        if (pointsRef.current) {
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry">
                <bufferAttribute attach="attributes-position" {...stars} />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="gray"
                sizeAttenuation={true}
            ></pointsMaterial>
        </points>
    );
};

export default Stars;
