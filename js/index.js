//N1
const arrOfItems = [
  {
    id: 1,
    title: 'Iphone 7',
    price: 200,
    imgUrl: '../assets/images/iphone7.png'
  },
  {
    id: 2,
    title: 'Iphone 6',
    price: 150,
    imgUrl: "../assets/images/Iphone6.png"
  },
  {
    id: 3,
    title: 'Iphone 10',
    price: 800,
    imgUrl: "../assets/images/iphone10.png"
  },
  {
    id: 4,
    title: 'Xiaomi Redmi 7A',
    price: 100,
    imgUrl: "../assets/images/Xiaomi Redmi 7A.png"
  },
  {
    id: 5,
    title: 'Samsung S20',
    price: 1200,
    imgUrl: "../assets/images/Samsung S20.webp"
  },
  {
    id: 6,
    title: 'Samsung S10',
    price: 900,
    imgUrl: "../assets/images/Samsung S10.png"
  },
  {
    id: 7,
    title: 'Google Pixel 3',
    price: 500,
    imgUrl: "../assets/images/Google Pixel 3.webp"
  },
  {
    id: 8,
    title: 'SONY XPERIA 1',
    price: 1050,
    imgUrl: "../assets/images/SONY XPERIA 1.png"
  },
]

const cardsContainer = document.querySelector('#cards')
const sortBtn = document.querySelector('#sortBtn')

const sortByCost = () => [...arrOfItems].sort((a,b) => a.price > b.price ? 1: -1)

const sortItems = (e) => {
  e.preventDefault()
  showCards(sortByCost())
}

const init = () => {
  showCards(arrOfItems)
}

const showCards= (arrOfCards) => {
  const output = arrOfCards.map(card => {
    return `
    <div class="card">
          <div class="card__imgContainer">
            <img src="${card.imgUrl}" alt="It's a ${card.title}" class="card__img">
          </div>
          <div class="card__info">
            <h3 class="card__title">${card.title}</h3>
            <p class="card__priceName">Price:
              <small class="card__cost">${card.price} $</small>
            </p>
            <button class="card__btn" href="#">Show More</button>
          </div>
        </div>
    `
  }).join('')
  cardsContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", init);
sortBtn.addEventListener('click', sortItems)

/////////////////////////////////////////////////////////////////////////////////////////////////////
// N2
// let is = true
// const f = () => `//<< ${is = !is}`

// console.log(f())
// console.log(f())
// console.log(f())
/////////////////////////////////////////////////////////////////////////////////////////////////////
