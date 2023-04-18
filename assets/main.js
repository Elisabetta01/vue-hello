/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao a tutti!',
        colorRed: 'text-danger',
        textCenter: 'text-center',
        urlImage: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
      }
    }
  }).mount('#app')