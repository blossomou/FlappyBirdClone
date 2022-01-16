import { Bodies, World } from 'matter-js'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Floor = (props : any) => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color;

    return(
        <View style={{
            backgroundColor: color,
            position: 'absolute', left: xBody, top: yBody, width: widthBody, height: heightBody}}
        />
        
    )
}

export default function (world:World, color: string, pos: {x: number, y: number}, size: {width: number, height: number}) {
    const initialFloor = Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
           label: 'Floor',
           isStatic: true

        } 
    )

    World.add(world, initialFloor);

    return {
        body: initialFloor,
        color,
        pos,
        renderer: <Floor/>
    }
}


