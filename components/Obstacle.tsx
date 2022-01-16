import { Bodies, World } from 'matter-js'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const pipeFill = require("../assets/pipeFill.png");
const pipeCapTop = require("../assets/pipeCapTop.png");
const pipeCapBottom = require("../assets/pipeCapBottom.png");

const Obstacle = (props : any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const location = props.location;
    console.log("location", location);

    return(

        <View style={{ position: 'absolute', left: xBody, top: yBody, width: widthBody, height: heightBody, display: 'flex', alignItems: 'center'}}>
        {location === 'bottom' ? <Image source={pipeCapBottom} resizeMode="stretch" style={{width: widthBody, height: 30}} />: null}
            <Image source={pipeFill} resizeMode="stretch" style={{flex: 1, width: widthBody-6,}}/>
        
        {location === 'top' ? <Image source={pipeCapTop} resizeMode="stretch" style={{width: widthBody, height: 30}} />: null}
      
        </View>
        
        // <View style={{
        //     borderWidth: 1, borderColor: location, borderStyle: 'solid', 
        //     position: 'absolute', left: xBody, top: yBody, width: widthBody, height: heightBody}}
        // />
        
    )
}

export default function (world:World, label: string,  location: string, pos: {x: number, y: number}, size: {width: number, height: number}) {
    const initialObstacle = Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
           label,
           isStatic: true 
        } 
    )

    World.add(world, initialObstacle);

    return {
        body: initialObstacle,
        location,
        pos,
        renderer: <Obstacle/>
    }
}


