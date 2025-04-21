
## Documentacion TanStack Query

[TanStack Query](https://tanstack.com/query/latest) page.

## Comando Instalacion Variable de Entorno
```
ng generate environments
```

## Comando Instalacion
```
npm i @tanstack/angular-query-experimental
npm install @tanstack/angular-query-devtools-experimental
```

## Agregar Linea Comando app.config.ts
```
import { provideTanStackQuery,QueryClient, withDevtools } from '@tanstack/angular-query-experimental';
```
```
provideTanStackQuery(new QueryClient(), withDevtools())
```

## Instalar Markdown
```
npm i ngx-markdown
```

## Documentacion Iconos Font Awesome

[Font Awesome](https://cdnjs.com/libraries/font-awesome)

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
