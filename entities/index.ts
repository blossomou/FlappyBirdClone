import Matter from 'matter-js'
import Bird from '../components/Bird';

 const restart = () => {
    let engine = Matter.Engine.create({enableSleeping: false, gravity: {y:0.4}})
    let world = engine.world;
 
    return{
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width:40})

    }
}

export default restart