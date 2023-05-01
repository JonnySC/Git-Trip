Conceptos básicos de git: repositorios, commits, ramas, etiquetas y remotos. 

<img src="imagenes/dia-2.gif">


<h1> Repositorios </h1>

Un repositorio de Git es un almacenamiento virtual de tu proyecto. Te permite guardar versiones del código a las que puedes acceder cuando lo necesites. Un repositorio contiene todos los archivos de tu proyecto y el historial de revisiones de cada uno de ellos.
[Documentacion](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git)

<h1>Commits</h1>

Los commits son la base principal del trabajo de Git, ya que es el comando más usado para guardar cualquier cambio en esta herramienta. Puedes pensar en un commit como una captura de tu proyecto, donde se crea una nueva versión de ese proyecto en el repositorio actual.
[Documentacion](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Etiquetado)

<h1>Ramas</h1>

Una rama en Git es simplemente un apuntador móvil apuntando a una de las confirmaciones. La rama por defecto de Git es la rama master. Las ramas son una división del estado del código, esto permite crear nuevos caminos a favor de la evolución del código.
[Documentacion](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F)

<h1>Etiquetas</h1>
Las etiquetas en Git son referencias que apuntan a puntos concretos en el historial de Git. Generalmente, el etiquetado se usa para capturar un punto en el historial que se utiliza para una publicación de versión marcada. 

Git utiliza dos tipos principales de etiquetas: ligeras y anotadas. 
* Una etiqueta ligera es muy parecido a una rama que no cambia - simplemente es un puntero a un commit específico. 
* Sin embargo, las etiquetas anotadas se guardan en la base de datos de Git como objetos enteros.

[Documentacion](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Etiquetado)

<h1> Remotos </h1>
Los repositorios remotos en Git son versiones de tu proyecto que están hospedadas en Internet o en cualquier otra red. Puedes tener varios de ellos, y en cada uno tendrás generalmente permisos de solo lectura o de lectura y escritura.

[Documentacion](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Trabajar-con-Remotos)