> Para vista previa estilizada, en Visual Studio: CTRL + SHIFT + V

# ¿QUÉ ES GIT?

Es un sistema de control de versiones que nos permite almacenar nuestro código y los diferentes cambios que han hecho los desarrolladores.

## CONCEPTOS

- **repositorio**: es el espacio donde se almacena el código y el historial de cambios, puede ser local o estar en un servidor como GitHub o GitLab
- **rama** (branch): es una linea o versión independiente del código que permite que los desarrolladores no se pisen entre si.
- **commit**: es la confirmación de un conjunto de cambios (el desarrollador establece un punto en el que los cambios que ha hecho están listos para guardarse en el repositorio).
- **merge**: es combinar los cambios de una rama en otra (he acabado la tarea, vamos a integrarla con la rama principal).
- **merge request**: es la solicitud que le haces al responsable para que combine (merge) tu rama con la principal. Esta solicitud la haremos a través de la página web de GitHub, no por código.



## COMANDOS 

## Clonar un proyecto
sirve para crear y guardar por primera vez un repositorio del servidor en nuestro local.

```bash
git clone <url repositorio>
```

## Saber dónde estamos

status nos ayuda a saber en que rama estamos y que cambios no han sido confirmados (commit) para su subida.
```bash
git status
```

## Bajar cambios del servidor

1. hacemos un fetch para que se actualice el estado real del repositorio con los cambios que han hecho todos los desarrolladores.
```bash
git fetch
```
2. bajamos los cambios (asegurarse de que estamos en la rama correcta).
```bash
git pull
```

## Subir cambios al servidor

1. **guardar todos los archivos** que hemos editado y cerrarlos.
2. verificar con un '**git status**' que estamos en la rama correcta y que todos los archivos que hemos cambiado están en la lista que nos muestra el archivo.
3. si hemos creado archivos nuevos, añadirlos al commit (incluyendo otro tipo de archivos como imágenes).
```bash
git add <ruta y nombre del archivo (puedo copiarlo del resultado del git status)>

# si queremos subir todo lo nuevo.
git add .
```
4. confirmar los cambios con un commit
```bash
git commit -am "mensaje del commit"

# ejemplo y buena practica, indicar dónde y qué se ha hecho.
git commit -am "css/myStyle.css - arreglado estilo de la tabla clientes"
```

5. hacer la subida
```bash
git push
```

5. (B) en la primera subida de una rama nueva, git nos pedira que indiquemos el destino ya que esa rama puede no estar listada en el servidor.
```bash
git push origin <nombre de mi rama>

# ejemplo
git push origin task/arreglar_login
```


## Ramas
permite moverse por las ramas o crear por otras

#### Ver las ramas (remotas y locales)
```bash
git branch -va
```

#### Ir a una rama
```bash
git checkout <nombre de la rama>
git checkout develop
```
#### Crear una nueva rama
```bash
git checkout -b <nombre de la rama>
git checkout -b task/arreglar_boton_login
```



