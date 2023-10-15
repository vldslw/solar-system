import './App.css';
import { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { ReactComponent as Path } from './assets/path.svg';
import { ReactComponent as Planet1 } from './assets/planet1.svg';
import { ReactComponent as Planet2 } from './assets/planet2.svg';
import { ReactComponent as Planet3 } from './assets/planet3.svg';
import { ReactComponent as Comet } from './assets/comet.svg';

function App() {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.defaults({ease: "none", repeat: -1});

  useLayoutEffect(() => {
    gsap.from("#planet1", {
      duration: 10,
      motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
      }
    });
    gsap.to("#planet2", {
      duration: 20,
      motionPath: {
        path: "#path2",
        align: "#path2",
        alignOrigin: [0.5, 0.5],
      }
    });
    gsap.to("#planet3", {
      duration: 30,
      motionPath: {
        path: "#path3",
        align: "#path3",
        alignOrigin: [0.5, 0.5],
      }
    });
    gsap.to("#comet", {
      duration: 30,
      motionPath: {
        path: "#path4",
        align: "#path4",
        alignOrigin: [0.8, 0.5],
        autoRotate: true,
      },
      onUpdate: () => {
        gsap.set("#comet", {
          rotation: "+=90",
        });
      }
    });
  }, []);

  return (
    <main className="main">
      <Path />
      <Planet1 id="planet1" className="planet"/>
      <Planet2 id="planet2" className="planet"/>  
      <Planet3 id="planet3" className="planet"/>
      <Comet id="comet" className="comet"/>
    </main>
  );
}

export default App;
