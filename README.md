# PF - Club deportivo Henry

## Estos son los ENDPOINTS disponibles hasta el momento:

NEWS
- GET: http://localhost:3001/news
- GET DETALLES: http://localhost:3001/news/{id}
- GET: http://localhost:3001/news?title={title} (buscar por titulo)
- GET: http://localhost:3001/news?name={name} (buscar por deporte)
- POST: http://localhost:3001/news/crear/{userId}
- PUT/DELETE: http://localhost:3001/news/{id}

COMENTARIOS
- GET: http://localhost:3001/comment
- GET DETALLES: http://localhost:3001/comment/{id}
- POST: http://localhost:3001/comment/comentar/{newId}/{userId}
- PUT/DELETE: http://localhost:3001/comment/{id}

USERS
- GET: http://localhost:3001/user
- GET DETALLES: http://localhost:3001/user/{id}
- PUT: http://localhost:3001/user/{id}
- DELETE: http://localhost:3001/user/{id}
- POST: http://localhost:3001/user

CONTACTO

- POST: http://localhost:3001/contact
- GET: http://localhost:3001/contact
- DELETE: http://localhost:3001/contact/{id}

PAY (pago cuota socio)

- GET: http://localhost:3001/pay
- GET DETALLE: http://localhost:3001/pay/{id}
- PUT: http://localhost:3001/pay/{id}
- POST: http://localhost:3001/pay

TEACHER

- GET: http://localhost:3001/teacher
- GET: http://localhost:3001/teacher/{id}
- PUT: http://localhost:3001/teacher/{id}
- DELETE: http://localhost:3001/teacher/{id}
- POST: http://localhost:3001/teacher

CATEGORY

- GET / POST: http://localhost:3001/category
- PUT / DELETE: http://localhost:3001/category/{id}

CATEGORY - SPORT

- GET / POST: http://localhost:3001/categorysport
- GET DETALLE / DELETE / PUT: http://localhost:3001/categorysport/{id}

ALBUM

- GET / POST: http://localhost:3001/album
- GET DETALLES: http://localhost:3001/album/{id}
- PUT: http://localhost:3001/album/{id}
- DELETE: http://localhost:3001/album/{id}

PHOTO

- GET: http://localhost:3001/photo 
- GET DETALLES: http://localhost:3001/photo/{id}
- POST: http://localhost:3001/photo/{albumId}
- PUT / DELETE: http://localhost:3001/photo/{id}

ROLE

- GET:
- POST:
- PUT:
- DELETE:

SPORT

- GET:
- POST:
- PUT:
- DELETE:

INSCRIPTION

- GET: http://localhost:3001/inscription
- POST: http://localhost:3001/inscription/{userId}

## ESPECIFICACIONES TECNICAS: Sujeto a cambios, mantenerse actualizados antes de escribir codigos

### Rutas NEWS: 
- GET, cualquier persona puede verlo, esto es lo que se usaria para mostrar las card de las noticias en el home:

        [{
            id
            title
            subtitle
            image
            user:
                {
                    name
                    surname
                }
            sport: 
                {
                    name
                }
            }]

- GET SEARCH trae la noticia como el GET normal, con esos mismos datos, para buscar por titulo de noticia se pedira por QUERY el {title} y para buscar por deporte se colocara por QUERY {name}

- GET DETALLES traera los detalles con la info completa de las noticias, y se pone el {id} de la noticia por parametros, los datos que trae son:

        [{
            id
            title
            subtitle
            text
            image
            createdAt
            updatedAt
            user:
                {
                    name
                    surname
                }
            sport:
                {
                    name
                }
            comments:
                [{
                    id
                    comment
                }]
        }]

- POST será creada solo por los administradores por lo cual al momento de crearla deberá estar logueado (por lo que el {userId} del admin va por parametros) y se creará mediante el panel del admin. Los datos que se deben ingresar son: 

        {
            title
            subtitle
            text
            image (se colola el link que da la api que usa el front (no recuerdo el nombre))
            sportId (colocar el id del sport al que pertenece la noticia)
        }

- PUT y DELETE se necesita el {id} de la noticia por parametros, los datos que se pueden editar son:

        {
            title
            subtitle
            text
            image
        }

### Rutas COMMENT
- GET los comentarios apareceran en la seccion de detalle de las noticias y traen desde el get lo siguiente: 

        [{
           id
           comment
           user:
                {
                    name
                    surname
                } 
        }]

- GET DETALLES, con {id} por parametros trae los siguentes datos:

        {
            id
            comment
            createdAt
            updatedAt
            user:
                {
                    username
                }
            new:
                {
                    title
                }
        }

- POST para poder comentar se solicita por parametros el id de la noticia {newId} y el del usuario {userId} y por body se pide:

        {
            comment
        }
- PUT para realizar el put se solicita el {id} del comentario por parametro y lo demas por body:

        {
            comment
        }

- DELETE se solicita el {id} del comentario por parametros

<!-- en proceso de cambios IGNORAR ESTA PARTE -->
### Rutas USER
- GET trae los siguientes datos:

        [{
            id
            name
            surname
            address
            phone
            email
            username
            membershipNumber
            dni
            role
            isOlder (si es false se muestran los datos del padre:
                    tutorName, tutorPhone, tutorEmail)
        }]

- GET DETALLES se debe colocar el {id} por parametros, traera la info completa del usuario con estos datos:

        {
            id
            name
            surname
            address
            phone
            email
            username
            password
            membershipNumber
            dni
            isOlder (si en el post se puso false, traera ademas:
                tutorName, tutorPhone, tutorEmail)
            role
        }

- POST para poder crear un usuario se solicitan estos datos:   

        {
            id
            name
            surname
            address
            phone
            email
            username
            password
            membershipNumber
            dni
            isOlder (si es false, agregar ademas:
                tutorName, tutorPhone, tutorEmail)
        }

- PUT 
<!-- ----------------------------------- -->

### Rutas CONTACT 
- GET traerá para el administrador la vista de los datos de todos los contactos que lleguen a la página:

       {
            id
            email
            name
            surname
            phone
            message
        }

- POST se requiere por body los siguientes datos:

      {
            email (requisito)
            name
            surname
            phone
            message
        }


Debería salir un alert al llenar el form de que su mensaje fué enviado con éxito y se vacíen los inputs ya que no se puede editar y evitar que se vuelva a enviar el mismo mensaje de contacto

- DELETE el administrador podrá eliminar de la base de datos el registro de contacto usando el {id} del mismo

### Rutas PAY <!-- en construccion -->

### Rutas TEACHER
- GET traera los datos del profesor que el admin haya creado:

        [{
            id
            name
            surname
            dni
            address
            phone
            email
        }]

- POST se solicitan por body estos datos: 

        {
            name
            surname
            dni
            address
            phone
            email
        }

- GET DETALLES, trae los mismos datos que el get normal:

        {
            id
            name
            surname
            dni
            address
            phone
            email
        }
 
- PUT se coloca el {id} del profesor por parametros y los datos que se pueden cambiar son:

        {
            name
            surname
            dni
            address
            phone
            email
        }

- DELETE colocando el {id} del profesor puedo borrarlo

### Rutas CATEGORY
- GET los datos que se mandan del back son:

        [{
            id
            name
        }]

- POST los datos que el back necesita son:

        {
            name
        }

-GET DETALLES colocar el {id} de la categoria por parametros:

        {
            id
            name
        }

- PUT con el {id} de la categoria por parametros enviar:

        {
            name
        }

- DELETE se necesita el {id} de la categoria por parametros

### Rutas CATEGORYSPORT 
- GET trae todos los datos de las categorias de deportes cargados en la base:

        [{
            id
            day (string escribir el nombre del dia)
            start (hora de comienzo de la clase: hh:mm:ss)
            finish (hora de finalizacion de la clase: hh:mm:ss)
            description
            fee (cuota de la clase)
            teacher:
                    {
                        name
                        surname
                    }
            category:
                    {
                        name
                    }
            sport:
                    {
                        name
                    }
        }]

- POST ingresar siguientes datos (sujeto a posibles cambios con la autenticacion)

        {
            day
            start
            finish
            description
            fee
            categoryId (colocar aqui el numero del id de la categoria)
            sportId (id del deporte)
            teacherId (id del profesor)
        }

- GET DETALLES colocar el {id} como parametros, trae los mismos datos que el get comun
- PUT colocar el {id} de la categorysport por parametros, se puede cambiar cualquier dato menos el id
- DELETE con el {id} de la categoriasport colocada por parametros

### Rutas ALBUM
- GET trae del album:

        [{
            id
            name
            description
        }]

- GET DETALLES colocar el {id} del album por parametros, trae los detalles de lo que esta asociado a ese album:

        {
            id
            photos:
                    [{
                        name
                        image
                    }]
        }

- POST datos que se deben mandar al back:

        {
            name
            description
        }

- PUT colocar el {id} del album por parametros, y se pueden cambiar estos datos:

        {
            name
            description
        }
- DELETE con el {id} del almbum por parametros puede asi eliminarse el album

### Rutas PHOTO
- GET trae los siguientes datos:

        [{
            id
            name
            image
            album:
                {
                    name
                }
        }]

- POST se pide el {albumId} por parametros y se llena con estos datos:

        {
            name
            image
        }

- GET DETALLES colocando el {id} de la foto por parametros, nos trae estos datos: 

        {
            id
            name
            image
            album:
                    {
                        name
                        description
                    }
        }
- PUT colocando el {id} de la foto por parametros podemos cambiar:

        {
            name
            image
        }

- DELETE colocando el {id} de la foto por parametros

### Rutas ROLE
- GET trae desde el back: 

        [{
            name
        }]

- POST mandar los datos:

        {
            name
        }

- GET DETALLES (no hay)
- PUT datos necesarios:

        {
            name (antiguo)
            change (nuevo)
        }

- DELETE :

        {
            name
        }

### Rutas SPORT
- GET trae los datos:

        [{
            id
            name
        }]

- GET DETALLE (no hay)
- POST mandar al back:

        {
            name
        }
- PUT datos necesarios:

        {
            name (antiguo)
            change (nuevo)
        }

- DELETE datos:

        {
            name
        }

### Rutas CALENDAR
- GET 
- POST
- GET DETALLES
- PUT
- DELETE