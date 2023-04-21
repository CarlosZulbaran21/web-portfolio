import Nodejs from '../assets/images/nodejslogo.png';
import PostgreSQL from '../assets/images/postgresSQL.png';
import Sequelize from '../assets/images/sequelize.png';
import Redis from '../assets/images/redis.webp';
import React from '../assets/svg/react.svg';
import Javascript from '../assets/images/javascript.png'
import NodeJsBackground from '../assets/images/nodejs-code.png'
import ReactBackground from '../assets/images/react-code.jpg'
import SequelizeBackground from '../assets/images/sequelize-code.png'
import Redisbackground from '../assets/images/redis-code.png'

export const projects = [
  {
    title: 'Portfolio',
    description: 'My web portfolio made with React, Javascript and BEM CSS',
    languages: [
      {
        icon: React,
        name: 'React',
      },
      {
        icon: Javascript,
        name: 'Javascript'
      }
    ],
    image: ReactBackground,
    icon: React,
    url: 'https://github.com/CarlosZulbaran21/web-portfolio',
  },
  {
    title: 'NodeJs Auth',
    description: 'Microservice based in authentication and user authorizations',
    languages: [
      {
        icon: Nodejs,
        name: 'Nodejs',
      },
      {
        icon: Sequelize,
        name: 'Sequelize',
      },
    ],
    image: NodeJsBackground,
    icon: Sequelize,
    url: 'https://github.com/CarlosZulbaran21/nodejs-auth',
  },
  {
    title: 'IoT-Websocket',
    description: 'A simple IoT Platform - DB Module (platzi-verse)',
    languages: [
      {
        icon: Nodejs,
        name: 'Nodejs',
      },
      {
        icon: PostgreSQL,
        name: 'PostgreSQL',
      },
    ],
    image: null,
    icon: Nodejs,
    url: 'https://github.com/CarlosZulbaran21/nodejs-iot-websocket',
  },
  {
    title: 'NodeJs Sequelize ORM',
    description: 'Microservice made with Sequelize and PostgreSQL',
    languages: [
      {
        icon: Nodejs,
        name: 'Nodejs',
      },
      {
        icon: Sequelize,
        name: 'Sequelize',
      },
    ],
    image: SequelizeBackground,
    icon: Sequelize,
    url: 'https://github.com/CarlosZulbaran21/nodejs-sequelize-postgres',
  },
  {
    title: 'Microservice Cache',
    description: 'Microservice cache with Redis, Bcrypt and Swagger',
    languages: [
      {
        icon: Nodejs,
        name: 'Nodejs',
      },
      {
        icon: Redis,
        name: 'Redis',
      },
    ],
    image: Redisbackground,
    icon: Redis,
    url: 'https://github.com/CarlosZulbaran21/microservice-cache-redis',
  },
];
