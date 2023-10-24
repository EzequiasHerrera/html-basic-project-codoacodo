const data = [
  {
    name: 'Red Dead Redemption 2',
    price: 59.99,
    image: 'img/reddead2.jpg'
  },
  {
    name: 'The Witcher 3: Wild Hunt',
    price: 39.99,
    image: 'img/witcher3.jpg'
  },
  {
    name: 'Grand Theft Auto V',
    price: 29.99,
    image: 'img/gtav.jpg'
  },
  {
    name: 'Assassin\'s Creed Odyssey',
    price: 49.99,
    image: 'img/acodyssey.jpg'
  },
  {
    name: 'Horizon Zero Dawn',
    price: 19.99,
    image: 'img/horizon.jpg'
  },
  {
    name: 'God of War',
    price: 39.99,
    image: 'img/godofwar.jpg'
  },
  {
    name: 'The Last of Us Part II',
    price: 59.99,
    image: 'img/tlou2.jpg'
  },
  {
    name: 'Death Stranding',
    price: 49.99,
    image: 'img/deathstranding.jpg'
  },
  {
    name: 'Cyberpunk 2077',
    price: 59.99,
    image: 'img/cyberpunk2077.jpg'
  },
  {
    name: 'Resident Evil Village',
    price: 59.99,
    image: 'img/re8.jpg'
  }
];

// Get the cards-container element
const cardsContainer = document.querySelector('.cards-container');

// Loop through the data array and create an h1 element for each object's name

data.forEach(obj => {
  const div = document.createElement('div');
  div.classList.add('card-game');

  const img = document.createElement('img');
  img.src = obj.image;
  img.alt = obj.name;
  div.appendChild(img);

  const divPrice = document.createElement('div');
  divPrice.classList.add('card-game-price', 'offer-30');

  const p = document.createElement('p');
  p.textContent = obj.price;
  divPrice.appendChild(p);

  const a = document.createElement('a');
  a.href = '#';
  a.classList.add('btn');
  a.textContent = 'Comprar';
  divPrice.appendChild(a);

  div.appendChild(divPrice);

  cardsContainer.appendChild(div);
});
