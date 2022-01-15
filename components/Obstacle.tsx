import { Bodies, World } from 'matter-js'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// interface pos {
//     x: number,
//     y: number;
// }

const Obstacle = (props : any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color;

    return(
        <View style={{
            borderWidth: 1, borderColor: color, borderStyle: 'solid', 
            position: 'absolute', left: xBody, top: yBody, width: widthBody, height: heightBody}}
        />
        
    )
}

export default function (world:World, label: string,  color: string, pos: {x: number, y: number}, size: {width: number, height: number}) {
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
        color,
        pos,
        renderer: <Obstacle/>
    }
}


