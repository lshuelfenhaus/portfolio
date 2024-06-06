import React from "react";
import Lottie from 'react-lottie'
import * as animationData from '@/app/images/coding.json'

export default function LottieControl() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <Lottie 
          options={defaultOptions}
        />
    );
  }
  