# Introduction

Welcome to the calculator! This calculator is a versatile and user-friendly tool that helps you perform various mathematical operations with ease. Whether you're a student, professional, or just someone in need of quick calculations, our calculator has got you covered.

## Index

- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Commands](#commands)
- [Building Docker Containers](#building-docker-containers)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [Development](#development)
  - [Pre-Requisites](#pre-requisites)
  - [File Structure](#file-structure)
  

## About
The calculator is a simple yet powerful tool designed to handle your everyday mathematical needs. It offers basic arithmetic operations like addition, subtraction, multiplication, and division, along with advanced features such as trigonometric functions and factorial.

## Usage
To use the calculator, follow these installation steps:

### Installation

1. Clone the repository to your local machine: 
```
\$ git clone "https://git.sysgears.com/andriy.berzhavych/calculator"
```
2. Navigate to the project directory:
```
\$ cd calculator
```
3. Install dependencies: 
```
\$ cd client <br/>
\$ npm install <br/>
\$ cd server <br/>
\$ npm install <br/>
```


### Commands
1. To run calculator: 
```
\$ cd client <br/>
\$ npm run dev 
```
2. To run webpack-dev-server: <br/>
```
\$ cd server <br/>
\$ npm run dev <br/>
```

Make sure you have looked to the .env.example file in both client and server and assigned in your .env file in both client and server values for each of the environment variable.

## Building Docker Containers

- Pre-Requisites
1. Docker Desktop installed on your machine.

### Development Mode

Steps to Build Docker Container in Development Mode using docker-compose:
1. Navigate to the project directory: 
```
\$ cd calculator
```
2. Navigate to the docker directory: 
```
\$ cd docker
```
3. Build and run docker containers by running up_calculator_dev.sh file: 
```
\$ ./up_calculator_dev.sh
```

### Production Mode

Steps to Build Docker Container in Production Mode using docker-compose:
1. Navigate to the project directory: 
```
\$ cd calculator
```
2. Navigate to the docker directory: 
```
\$ cd docker
```
3. Build and run docker containers by running up_calculator_prod.sh file: 
```
\$ ./up_calculator_prod.sh
```


## Development

### Pre-Requisites
Before you start developing for calculator, make sure you have the following tools installed:
1. Node.js
2. Git

### File Structure
.
 * [client](./client)
   * [.jest](./client/.jest)
   * [docker](./client/docker)
   * [public](./client/public)
   * [src](./client/src)
      * [components](./client/src/components)
      * [context](./client/src/context)
      * [global](./client/src/global)
      * [hooks](./client/src/hooks)
      * [queryBuilder](./client/src/queryBuilder)
      * [App.tsx](./client/src/App.tsx)
      * [main.tsx](./client/src/main.tsx)
   * [Dockerfile](./client/Dockerfile)
   * [package-lock.json](./client/package-lock.json)
   * [package.json](./client/package.json)
   * [tsconfig.json](./client/tsconfig.json)
   * [tsconfig.node.json](./client/tsconfig.node.json)
   * [vite.config.ts](./client/vite.config.ts)
 * [docker](./docker)
   * [scripts](./docker/scripts/)
      * [down_calculator_dev.sh](./docker/scripts/down_calculator_dev.sh)
      * [down_calculator_prod.sh](./docker/scripts/down_calculator_prod.sh)
      * [up_calculator_dev.sh](./docker/scripts/up_calculator_dev.sh)
      * [up_calculator_prod.sh](./docker/scripts/up_calculator_prod.sh)
   * [docker-compose-dev.yml](./docker/docker-compose-dev.yml)
   * [docker-compose-prod.yml](./docker/docker-compose-prod.yml)
 * [server](./server)
   * [dist](./server/dist)
   * [src](./server/src)
      * [config](./server/src/config)
      * [database](./server/src/database)
      * [global](./server/src/global)
      * [modules](./server/src/modules)
      * [utils](./server/src/utils)
      * [server.ts](./server/src/server.ts)
   * [Dockerfile](./server/Dockerfile)
   * [jest.config.js](./server/jest.config.js)
   * [package-lock.json](./server/package-lock.json)
   * [package.json](./server/package.json)
   * [tsconfig.json](./server/tsconfig.json)
   * [webpack.config.js](./server/webpack.config.js)
 * [README.md](./README.md)


