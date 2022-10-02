# test-andata-front

Test front project for https://github.com/ShevtsovTN/test-andata 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Описание:
Точка входа в проект `main.js` там подключается и создается Vue SPA приложение.
`api/index.js` - набор базовых методов для запросов на бэк части приложения , (пример реализоция в https://github.com/ShevtsovTN/TestWork_0011)
`config/index.js` - url для связи с бэк частью https://github.com/ShevtsovTN/test-andata
`helpers` - файлы для реализации валидации и получения комментариев.
