# Instrucciones de instalación y Corrida

## Instalaciones Previas

Para poder iniciar el proyecto, es necesario tener instalado Node.js (v16.14) dentro del ordenador que se desee correr el proyecto. El proyecto en el front end está realizado en React, por lo que no es necesario instalar otro componente.
Es recomendable instalar el manejador de paquetes de Yarn, para poder operar con los siguientes comandos básicos para el proyecto.

    yarn add or yarn – Instalar dependencias

    yarn remove – Eliminar dependencias

    yarn Run - Correr ambiente

(Esta explicación de igual manera se encuentra en el README dentro de Store Front-end)

## Store-Frontend package.

Para inicializar este ambiente, es necesario una terminal dentro del directorio “./store-frontend”. En caso de no tener las dependencias o la carpeta “node_modules” es necesario correr el comando:

    yarn

Este comando instala las dependencias faltantes (En caso de que aún tenga una carpeta de node_modules es bueno correr el comando de todas maneras para asegurar que estén las dependencias necesarias.

Una vez corrido, el comando para iniciar un servidor dentro del puerto 3000 es necesario correr el comando:

    yarn run start

Esto puede tardar un momento la primera vez que se corre debido a la compilación que realiza. Pero debería iniciar después de un determinado tiempo.

Nota: Es importante correr el store-backend en otra terminal para poder visualizar las funcionalidades de consultas a la BD, que viene a continuación.

## Store-Backend package.

Para correr la base de datos, es necesario contar con los permisos de Mongo Atlas en la base de datos (o bien contar con su propia bd) dentro del archivo .env y correr los siguientes comandos. En caso de que no se cuente con node_modules o tener una versión desactualizada, es necesario correr el comando:

    yarn

Para actualizar las dependencias, una vez corrido. Teniendo instalado nodemon previamente (en caso de que no, yarn add nodemon instala esta dependencia). Y para levantar el ambiente es necesario el comando.

    yarn run dev

Y en consola si tienes permisos para ingresar a la BD y las credenciales, debería imprimir que la conexión es exitosa y ya podrá consultar la información que tenga almacenada.

## Admin-Dashboard package.

Esta página es el servicio de usuarios administradores que cuenten con credenciales autorizadas para ingresar a esta pantalla. De tal forma que ellos sean capaces de realizar operaciones en la base de datos ya sea de productos (un usuario admin) y un creador de admins (super admin).

Funciona similar al store front-end, para instalar dependencias:

    yarn

Una vez instalado, se puede correr el comando siguiente para modificar el puerto donde se desee correr (para que no sea el mismo que store-frontend)

    yarn run startWindows

Y puede tardar unos minutos y abrirá directamente la página del login de usuarios.
