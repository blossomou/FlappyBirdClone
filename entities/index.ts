import Matter from 'matter-js'

 const restart = () => {
    let engine = Matter.Engine.create({enableSleeping: false, gravity: {y:0.4}})
    let world = engine.world;
 
    return{
        physics: {engine, world},

    }
}

export default restart