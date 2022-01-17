import { Bodies, World } from 'matter-js';
import React from 'react';
import { Image } from 'react-native';

const image = require('../assets/flappyBird.png');

const Bird = (props: any) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;
  const rotation = props.body.velocity.y > 0 ? '45deg' : '0deg';

  return (
    <Image
      source={image}
      resizeMode="contain"
      style={{
        position: 'absolute',
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        transform: [{ rotateZ: rotation }],
      }}
    />
  );
};

export default function (
  world: World,
  color: string,
  pos: { x: number; y: number },
  size: { width: number; height: number },
) {
  const initialBird = Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: 'Bird',
  });

  World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
}
