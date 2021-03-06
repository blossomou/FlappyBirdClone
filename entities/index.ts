import Matter from 'matter-js'
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';

import { Dimensions } from 'react-native';
import { getPipeSizePosPair } from '../utils/random';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const restart = () => {
    let engine = Matter.Engine.create({enableSleeping: false, gravity: {y:0.4}})
    let world = engine.world;
    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair( windowWidth * 0.9)


    return {
        physics: {engine, world},
        
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 50, width:50}),
        
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'top', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'bottom', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'top', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'bottom', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

        Floor: Floor(world, 'green', {x: windowWidth/2, y: windowHeight}, {height: 50, width:windowWidth})


    }
}

export default restart