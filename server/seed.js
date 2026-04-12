import db from './firebase.js'

const products = [
  {
    name: 'Tech Deck Pro Board',
    category: 'boards',
    price: 5.99,
    description: 'Standard 96mm fingerboard with custom graphic',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Tech Deck Collector Board',
    category: 'boards',
    price: 8.99,
    description: 'Limited edition pro model fingerboard',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Uncut Grip Tape Sheet',
    category: 'grip tape',
    price: 2.49,
    description: 'Black foam grip tape, fits any deck',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Graphic Grip Tape Pack',
    category: 'grip tape',
    price: 3.99,
    description: 'Pack of 3 printed grip tape sheets',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'CNC Bearing Wheels',
    category: 'wheels',
    price: 4.99,
    description: 'Set of 4 smooth-rolling bearing wheels',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Pro Trucks Set',
    category: 'trucks',
    price: 6.99,
    description: 'Adjustable metal trucks, pair of 2',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Half Pipe Ramp',
    category: 'obstacles',
    price: 12.99,
    description: 'Foldable mini half pipe for tricks',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Quarter Pipe Ramp',
    category: 'obstacles',
    price: 9.99,
    description: 'Stackable quarter pipe with grip surface',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Flat Bar Rail',
    category: 'obstacles',
    price: 7.99,
    description: 'Metal flat bar rail for grinds',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: 'Stair Set with Ledge',
    category: 'obstacles',
    price: 14.99,
    description: '3-stair set with attached grind ledge',
    image: 'https://via.placeholder.com/200'
  }
]

async function seed() {
  console.log('seeding products...')

  for (const product of products) {
    const ref = await db.collection('products').add(product)
    console.log(`added: ${product.name} (${ref.id})`)
  }

  console.log('done! seeded ' + products.length + ' products')
}

seed()
