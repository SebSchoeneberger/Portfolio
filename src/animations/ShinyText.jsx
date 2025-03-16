const ShinyText = ({ text, disabled = false, speed = 2.5, className = '' }) => {
    return (
      <span
        className={`relative text-black inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 1) 70%)',
          backgroundSize: '250% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', // Keeps shine effect visible
          animationDuration: `${speed}s`,
        }}
      >
        {text}
      </span>
    );
  };
  
  export default ShinyText;
  