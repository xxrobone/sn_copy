import React, { useRef, useEffect, useState } from 'react';

import styles from './Confetti.module.css'

const COLORS = ['#2ecc71', '#3498db', '#e67e22', '#e67e22', '#e74c3c'];

if (typeof window !== "undefined") {
    const TOP_OFFSET = window.innerHeight;
  }

const LEFT_OFFSET = 150;

const randomNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const randomColor = () => COLORS[randomNumber(0,COLORS.length)];

const Particle = ({children, size}) => {
  const ref = useRef();
  const child = React.Children.only(children);
    const top = randomNumber(-200, -size[1]);

    
  
  useEffect(() => {
    ref.current.style.setProperty('--x', `${randomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`);
    ref.current.style.setProperty('--y', `${window.innerHeight - top + randomNumber(0, 300)}px`);
    ref.current.style.setProperty('--rotate', `${randomNumber(200, 3000)}deg`);
  }, [top]);
  
  return React.cloneElement(child, {ref, style: {
    '--color': randomColor(),
    '--size': `${randomNumber(...size)}px`,
    '--rotate': '0deg',
    '--x': '0px',
    '--y': '0px',
    top: top,
    left: randomNumber(0, window.innerWidth),
  }});
};

const CircularParticle = () => (
  <Particle size={[5, 10]}>
    <div className={`${styles.particle} ${styles.circular}`}/>
  </Particle>
);

const RectangularParticle = () => (
  <Particle size={[5, 10]}>
    <div className={`${styles.particle} ${styles.rectangular}`}/>
  </Particle>
);

const SquiggleParticle = () => (
  <Particle size={[15, 45]}>
    <svg className={`${styles.particle} ${styles.squiggle}`}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 30 200">
      <path d="M15 0 Q 30 25 15 50 Q 0 75 15 100 Q 30 125 15 150 Q 0 175 15 200"/>
    </svg>
  </Particle>
);

const Particles = (({count: n}) => {
  
  const particles = [];
  const types = [SquiggleParticle, RectangularParticle, CircularParticle];

  while(n--) {
    const Particle = types[randomNumber(0, 3)];
    particles.push(
      <Particle key={n}/>
    );
  }
  
  return (
    <div className={styles.particles}>
      {particles}
    </div>
  );
});

let id = 1;
const Confetti = ( {particles}) => {
 
  const {innerWidth} = window;  
  
  return (
    <div className='app'>
      {particles.map(id => (
        <Particles key={id} count={Math.floor(innerWidth / 10)}/>
      ))}         
    </div>
  );
};

export default Confetti

