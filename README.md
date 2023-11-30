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
  - [Build](#build)  

## About
The calculator is a simple yet powerful tool designed to handle your everyday mathematical needs. It offers basic arithmetic operations like addition, subtraction, multiplication, and division, along with advanced features such as trigonometric functions and factorial.

## Usage
To use the calculator, follow these installation steps:

### Installation

1. Clone the repository to your local machine:
\$ git clone "https://git.sysgears.com/andriy.berzhavych/calculator"
2. Navigate to the project directory:
\$ cd calculator
3. Install dependencies: 
\$ cd client
\$ npm install
\$ cd server
\$ npm install


### Commands
1. To run calculator:
\$ cd client
\$ npm run dev
2. To run webpack-dev-server:
\$ cd server
\$ npm run dev

## Development

### Pre-Requisites
Before you start developing for calculator, make sure you have the following tools installed:
1. Node.js
2. Git

### File Structure
├───client
|      ├───public
|      └───src
|           ├───components
|           ├───context
|           ├───queryBuilder
|           ├───App.tsx
|           └───main.tsx
└───client
       ├───build
       └───src
            ├───config
            ├───database
            ├───models
            ├───modules
            ├───utils
            └───server.ts


