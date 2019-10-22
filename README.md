# ichuri-net
Pagina web de [Restaurante Ichuri - Coffee][ichuri]
Esta pagina cuenta con un sistema de templates basado en Preprocesadores [PUG][pug] que esta basado en JavaScript y [SASS](https://sass-lang.com/), con lo que se optimiza cualquier cambio que se desee realizar, con respecto al formato de la página.

[Ichuri - Coffee Restaurant][ichuri] es un restaurante fundado para colaborar en fines sociales, y gastronomicos, cuenta con distintas sucursales en **La Paz** y **Santa Cruz**
___

## Variables
Esta son algunas variables que se pueden usar para cambiar los aspectos generales de la pagina:
## Clases CSS
Estas son algunas clases generales que se pueden usar para conseder algun formato del **CSS** a elementos **HTML**

1. `.shadow` Añade una sombra a un box
2. `.enlace` da estilos de lik
3. `.btn-primary` estilo para boton primario
4. `.color-dark` Fondo color mas oscuro que el primario en toda la página

## Mixins [PUG][pug]

1. `+enlace(texto,url)` Este **mixin** debe incluir el texto y el enlace para crear un enlace de forma rapida.
2. `+titulo(titulo)` Este **mixin** crea un titulo h2 para las secciones.
3. `+social` Este **mixin** llama al formato en html de las redes sociales, con lo que se puede agregar a cualquier sector que se desee.
4. `+eventos_recientes` Este **mixin** llama a los 3 eventos recientes que se esten organizando en la institución o pasados.
5. `+evento(titulo, descripcion, enlace,imagen)` LLama al formato **mixin** de un **evento** al cual se debe proporcionar los datos que solicita.
6. `servicio(img,title,description,link)` Este **mixin** proporciona el formato de **servicio** proporcionando los datos solicitados.
> Para llenar el formato de **eventos**, y **servicios** de forma dinamica y para optimizar el trabajo se realizo un array de objetos localizado en el archivo [**config.pug**](https://github.com/CristhianChaucaMariaca/ichuri-net/blob/master/dev/config/config.pug) en el cual se debe llenar los datos solicitados con las mismas variables, y el contenido se completara automaticamente en el index.


[ichuri]:https://www.ichuri.net/
[pug]:https://pugjs.org/api/getting-started.html
