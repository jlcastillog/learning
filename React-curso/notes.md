## Comenzar proyecto

Para la gestion de paquetes vamos a usar "npm", asique para inicializar un proyecto usamos el comando:

> npm init -y

Ahora para crear el proyecto usaremos [Vite](https://vitejs.dev/) con el comando:

> npm create vite@latest

Pasos:
- Introducir nombre del poyecto
- Tipo de soporte (en nuestro caso seleccionamos React)
- Lenguaje (nosotros usaremos Javascript + *[SWC](https://swc.rs/))

*SWC -> Transpilador

Ultimo pase seria instalar las depencias del proyecto. Para ello, ubicado desde la terminal en la carpeta del proyecto se usa el comando:

>npm install

Para inicializar nuestro proyecto debes de usar:

>npm run dev

Aparecera algo asi:

![alt text](image.png)

## Configurar linter para monorepo

Instalar el paquete en el proyecto

>npm install standard -D

Instalar el pluggin de Visual Code "ESLint"

![alt text](image2.png)

## React Developer Tools

En Google Chrome puedes instalar la extesion:

![alt text](image3.png)


## Desplegar en producción

Desde la terminal ejecutar:

> npm run build

Esto te genera el paquete para desplegar:

![alt text](image4.png)

Puede usar esta pagina para desplegar tu web: [Netlify Drop](https://app.netlify.com/drop)

Para ello solo tienes que arrastar la carpeta del depliegue ("dist") en la zona indicada de la web.