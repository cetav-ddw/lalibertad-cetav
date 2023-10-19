<h1 align="center">
  <br>
  :sparkles: New new CETAV :sparkles:
  <br>
</h1>

## 📦 Instalación

El proyecto corre sobre [NextJS](https://nextjs.org/), se esta usando version 13. Dependencias:
- [NodeJS](https://nodejs.org/en) v18 ó superior

> 💡 Se recomienda usar [nvm](https://github.com/nvm-sh/nvm) para instalar y manejar las versiones de NodeJS. Debería de funcionar si deja que `nvm` instale la version default (latest) de NodeJS y `npm`

## 🚶‍♂️Como iniciar

Clonar el repositorio

```
git clone git@github.com:cetav-ddw/lalibertad-cetav.git
```

> 💡 Todos los comandos se corren desde el `root` del repositorio.

Una vez que se clonó el repositorio, instale las dependencias:

```
npm install
```

### Correr server de desarrollo local

> 💡 Detalles de NextJS CLI en la [documentación](https://nextjs.org/docs/app/api-reference/next-cli)

Para correr el server en modo desarrollo (dev) corra:

```
npm run dev
```

Esto levantará el server local en http://localhost:3000

Para correr localmente **Storybooks** en http://localhost:6006

```
npm run storybook
```

### :shipit: Otros comandos útiles

Revisar _linting errors_ usando`eslint`

```
npm run lint
```

Formatear código usando `prettier`

```
npm run format
```

## 🥞 Organización del repositorio
TBD - agregar detalles de que va en cada folder y convenciones, ej. cuando usar extensión `.jsx` ó `.js`
