import Matter from 'matter-js'
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



 const restart = () => {
    let engine = Matter.Engine.create({enableSleeping: false, gravity: {y:0.4}})
    let world = engine.world;
 
    return{
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width:40}),
        Floor: Floor(world, 'green', {x: windowWidth/2, y: windowHeight}, {height: 50, width:windowWidth})


    }
}

export default restart