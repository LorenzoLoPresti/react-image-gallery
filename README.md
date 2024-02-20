# react-image-gallery

Progetto personale didattico.

![Preview](https://github.com/LorenzoLoPresti/images/blob/main/react-image-gallery/image1.png)

![Preview](https://github.com/LorenzoLoPresti/images/blob/main/react-image-gallery/image2.png)

![Preview](https://github.com/LorenzoLoPresti/images/blob/main/react-image-gallery/image3.png)

## Stack utilizzato:

- Vite
- React
- Typescript
- Tailwind
- React Query
- React-router-DOM
- React-intersection-observer
- Transition kit
- Unsplash API

## Descrizione

Semplice applicazione che mostra una serie di foto da Unsplash. Cliccando su un'immagine si apre la singola foto. È possibile passare alla foto precedente/successiva o mostrare i dettagli dell'artista che l'ha realizzata cliccando sulla foto. Infine è possibile cambiare il tema dell'applicazione.
Realizzata cercando di seguire l'Atomic design metodology.

### Start

Per avviare l'applicazione:

- Navigare alla cartella del progetto con il terminale
- Installare le dipendenze: `npm i`
- Creare un file .env nella root
- inserire una variabile _VITE_UNSPLASH_API_KEY_ nel file .env: `VITE_UNSPLASH_API_KEY=my_key`
- Avviare l'applicazione inserendo il comando `npm run dev`
