# comprueba-que

Otro framework para testing fácil y rápido.

## Uso

Primero se inicia una instancia entorno a un valor, así:

```js
const comprueba_que = Comprueba.que(800);
```

Luego puedes usar estos métodos, que lanzarán un error en caso de fallar:

- `es_igual_que`: acepta 1 parámetro. Comprobará que el valor base es igual (`===`) que el valor pasado.
- `es_indefinido`: comprobará que es `typeof undefined`.
- `es_booleano`: comprobará que es `typeof boolean`.
- `es_numero`: comprobará que es `typeof number`.
- `es_texto`: comprobará que es `typeof string`.
- `es_objeto`: comprobará que es `typeof object`.
- `es_funcion`: comprobará que es `typeof function`.
- `es_lista`: comprobará que es `Array.isArray`.
- `es_mayor_que`: acepta 1 parámetro. Comprobará que es `>` que el valor proporcionado como parámetro.
- `es_menor_que`: acepta 1 parámetro. Comprobará que es `<` que el valor proporcionado como parámetro.
- `es_instancia_de`: acepta 1 valor. Comprobará que el valor base es `instanceof` el valor proporcionado como parámetro.
- `es_fecha`: comprobará que es `instanceof Date`.
- `es_jsonable`: comprobará que es un valor que no lanza error al `JSON.stringify`.
- `no_es_igual_que`: acepta 1 parámetro. Comprobará que el valor base no es igual (`!==`) que el valor pasado.
- `no_es_indefinido`: comprobará que no es `typeof undefined`.
- `no_es_booleano`: comprobará que no es `typeof boolean`.
- `no_es_numero`: comprobará que no es `typeof number`.
- `no_es_texto`: comprobará que no es `typeof string`.
- `no_es_objeto`: comprobará que no es `typeof object`.
- `no_es_funcion`: comprobará que no es `typeof function`.
- `no_es_lista`: comprobará que no es `Array.isArray`.
- `no_es_instancia_de`: acepta 1 valor. Comprobará que el valor base no es `instanceof` el valor proporcionado como parámetro.
- `tiene_longitud_mayor_que`: acepta 1 parámetro. Comprobará que el valor proporcionado tiene un `.length` que es `>` que el valor proporcionado como parámetro.
- `tiene_longitud_menor_que`: acepta 1 parámetro. Comprobará que el valor proporcionado tiene un `.length` que es `>` que el valor proporcionado como parámetro.
- `puede`: acepta 1 parámetro de tipo función. Comprobará que esa función, que recibe el valor base como primer parámetro, devuelve `true`.
- `no_puede`: acepta 1 parámetro de tipo función. Comprobará que esa función, que recibe el valor base como primer parámetro, no devuelve `true`.
- `lanza_error_al`: acepta 1 parámetro de tipo función. Comprobará que esa función, que recibe el valor base como primer parámetro, sí lanza un error.
- `no_lanza_error_al`: acepta 1 parámetro de tipo función. Comprobará que esa función, que recibe el valor base como primer parámetro, sí lanza un error.

## Uso avanzado

El framework permite personalizar el error que se emitirá en caso de fallo.

Esto se hace así:

```js
Comprueba.que(800, "ochocientos", "El número NO debe ser igual que ochocientos").no_es_igual_que(800)
```

El error emitido por defecto ya es bastante intuitivo. Pero de esta forma, puedes numerar los errores de tus aplicaciones, por ejemplo.

## Nota

Los tests están a medias, pero bueno. En principio, va bien. Para hacer validaciones unilínea. y así evitar el `if(...) throw ...` de una forma más legible.