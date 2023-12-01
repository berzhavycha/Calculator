# Introduction

Welcome to the calculator! This calculator is a versatile and user-friendly tool that helps you perform various mathematical operations with ease. Whether you're a student, professional, or just someone in need of quick calculations, our calculator has got you covered.

## Index

- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Commands](#commands)
- [Development](#development)
  - [Pre-Requisites](#pre-requisites)
  - [File Structure](#file-structure)
  

## About
The calculator is a simple yet powerful tool designed to handle your everyday mathematical needs. It offers basic arithmetic operations like addition, subtraction, multiplication, and division, along with advanced features such as trigonometric functions and factorial.

## Usage
To use the calculator, follow these installation steps:

### Installation

1. Clone the repository to your local machine: <br/>
\$ git clone "https://git.sysgears.com/andriy.berzhavych/calculator"
2. Navigate to the project directory: <br/>
\$ cd calculator
3. Install dependencies: <br/>
\$ cd client <br/>
\$ npm install <br/>
\$ cd server <br/>
\$ npm install <br/>


### Commands
1. To run calculator: <br/>
\$ cd client <br/>
\$ npm run dev 
2. To run webpack-dev-server: <br/>
\$ cd server <br/>
\$ npm run dev <br/>

Make sure you have looked to the .env.example file in both client and server and assigned in your .env file in both client and server values for each of the environment variable.

## Development

### Pre-Requisites
Before you start developing for calculator, make sure you have the following tools installed:
1. Node.js
2. Git

### File Structure
```
├───client
|      ├───public
|      └───src
|           ├───components
|           ├───context
|           ├───queryBuilder
|           ├───App.tsx
|           └───main.tsx
└───server
       ├───build
       └───src
            ├───config
            ├───database
            ├───models
            ├───modules
            ├───utils
            └───server.ts
```


