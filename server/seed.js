import db from './firebase.js'

const products = [
  {
    name: 'Tech Deck Pro Board',
    category: 'boards',
    price: 5.99,
    description: 'Standard 96mm fingerboard with custom graphic',
    image: 'https://images.unsplash.com/photo-1555367402-50f1dad0cec6?w=400&h=400&fit=crop'
  },
  {
    name: 'Tech Deck Collector Board',
    category: 'boards',
    price: 8.99,
    description: 'Limited edition pro model fingerboard',
    image: 'https://images.unsplash.com/photo-1661205793794-f0c5b711934f?w=400&h=400&fit=crop'
  },
  {
    name: 'Uncut Grip Tape Sheet',
    category: 'grip tape',
    price: 2.49,
    description: 'Black foam grip tape, fits any deck',
    image: 'https://images.unsplash.com/photo-1764567386744-090d5ff67d66?w=400&h=400&fit=crop'
  },
  {
    name: 'Graphic Grip Tape Pack',
    category: 'grip tape',
    price: 3.99,
    description: 'Pack of 3 printed grip tape sheets',
    image: 'https://images.unsplash.com/photo-1638502230589-a20908215540?w=400&h=400&fit=crop'
  },
  {
    name: 'CNC Bearing Wheels',
    category: 'wheels',
    price: 4.99,
    description: 'Set of 4 smooth-rolling bearing wheels',
    image: 'https://images.unsplash.com/photo-1617484038571-c999581a7f12?w=400&h=400&fit=crop'
  },
  {
    name: 'Pro Trucks Set',
    category: 'trucks',
    price: 6.99,
    description: 'Adjustable metal trucks, pair of 2',
    image: 'https://images.unsplash.com/photo-1632949946065-ff32b33b3c1a?w=400&h=400&fit=crop'
  },
  {
    name: 'Half Pipe Ramp',
    category: 'obstacles',
    price: 12.99,
    description: 'Foldable mini half pipe for tricks',
    image: 'https://images.unsplash.com/photo-1705794736775-f1b4e04d0e4c?w=400&h=400&fit=crop'
  },
  {
    name: 'Quarter Pipe Ramp',
    category: 'obstacles',
    price: 9.99,
    description: 'Stackable quarter pipe with grip surface',
    image: 'https://images.unsplash.com/photo-1607368005478-93989e8af94e?w=400&h=400&fit=crop'
  },
  {
    name: 'Flat Bar Rail',
    category: 'obstacles',
    price: 7.99,
    description: 'Metal flat bar rail for grinds',
    image: 'https://images.unsplash.com/photo-1565058535280-6410a84ba049?w=400&h=400&fit=crop'
  },
  {
    name: 'Stair Set with Ledge',
    category: 'obstacles',
    price: 14.99,
    description: '3-stair set with attached grind ledge',
    image: 'https://images.unsplash.com/photo-1617200746376-74e009bcf715?w=400&h=400&fit=crop'
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
