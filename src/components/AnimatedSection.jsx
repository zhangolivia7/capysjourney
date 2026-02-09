import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  ...props 
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(20px)';
        case 'down':
          return 'translateY(-20px)';
        case 'left':
          return 'translateX(20px)';
        case 'right':
          return 'translateX(-20px)';
        default:
          return 'translateY(20px)';
      }
    }
    switch (direction) {
      case 'left':
      case 'right':
        return 'translateX(0)';
      default:
        return 'translateY(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
