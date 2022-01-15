import Matter from "matter-js";

const Physics= (entities: { physics: { engine: any; }; }, {touches, time, dispatch}: any) =>{
    let engine = entities.physics.engine;
    
    Matter.Engine.update(engine, time.delta);

    return entities;

}

export default Physics