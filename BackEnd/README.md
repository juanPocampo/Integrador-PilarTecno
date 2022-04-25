# Guía de escalada en roca de Escaladores La Rioja

El proyecto va a listar los sectores de escalada de La Rioja Equipados por
escaladores La Rioja.
El sector debe indicar la cantidad de vias abiertas, geolocalización y la información de cada via.
La via debe contar con una foto de la pared natural con la línea marcada, información sobre el grado de dificultad, el tipo de piedra y modalidad de escalada, información sobre el aperturista y una descripción.

Sector: {
id: objectId,
name: Sring,
map: imgUrl,
lat: String,
long: String,
images: [imgUrl]
vias:[{Via}]
}
Via:{
id: objectId,
name: String,
opener: String/{user?}
grade: String[3],
climbingType: String,
rockKind: String,
desc: Text,
images:[{imgUrl}]
}

# Para escalar

Cargar imágenes en otro servicio y agregar lógica de guardado de imágen en el back-end

# CURSO TÉCNICO #5: INTEGRADOR

El curso Integrador deberá:

1.  Aplicar las 3 tecnologías: Node, React y React Native.
2.  Darles a los participantes una elección libre de la temática siguiendo alguno de los siguientes ejes temáticos:

- La Rioja.
- Mundial de fútbol de la FIFA.

Ejemplos:

1.  Lugares turísticos de La Rioja.
2.  Estadios del mundial.

3.  El recurso elegido por la temática debe ser geolocalizable. Se debe incluir un campo a una URL de imagen.
4.  Tener bien definidos la cantidad de actividades y objetivos de cada una.

Orden:

1.  Node
2.  React
3.  Reac Native

Temas complejos:

- No autenticación
- Si Redux

## Actividades:

### Node.js - Especificaciones

Se solicita un backend hecho en Node.js y Express.js.

Se debe respetar la estructura de los proyectos vistos en el curso 3.

Actividad #1: Inicializar proyecto tanto de express como en github, definir scripts en package.json, definir rutas y config de conexión a BD Mongodb. Configurar .gitignore, credenciales sensibles en .env.

Actividad #2: Programación de los endpoints para un CRUD de un recurso. Reemplazar 'resources' por el nombre del recurso. Por ejemplo: stadiums. Siempre en plural.

- GET :: /resources ---> Trae un array con todos los resources.
- GET :: /resources/:id ---> Trae el resource con la id especificada.
- POST :: /resources ---> Crea un solo resource a la base de datos. Recibe datos por body. Verificar la entrada con Joi.
- DELETE :: /resources/:id ---> Borra un elemento de la base de datos.
- PATCH :: /resources/:id ---> Edita un resource con los datos enviados en body. Verificar body con Joi.
