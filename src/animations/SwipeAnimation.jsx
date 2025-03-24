
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1742823215460.json';

const SwipeAnimation = () => {
  return (
    <div className="w-8 h-8 mx-auto">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default SwipeAnimation;
