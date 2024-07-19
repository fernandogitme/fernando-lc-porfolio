import React from 'react';
import { MotionTransition } from './transition-component';
import Image from 'next/image';

const CircleImage = () => {
  return (
    <div className="absolute bottom-0 right-0 z-10">
      <MotionTransition position="right">
        <Image
          src="/circles.png"
          width={350}
          height={350}
          alt="Circles"
          className="w-full h-auto"
        />
      </MotionTransition>
    </div>
  );
};

export default CircleImage;