import express from 'express'
import cors from 'cors'
import db from './firebase.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// get all products
app.get('/api/products', async (req, res) => {
  try {
    const { category } = req.query
    let query = db.collection('products')

    if (category) {
      query = query.where('category', '==', category)
    }

    const snapshot = await query.get()
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    res.json(products)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'failed to fetch products' })
  }
})

// get single product by id
app.get('/api/products/:id', async (req, res) => {
  try {
    const doc = await db.collection('products').doc(req.params.id).get()

    if (!doc.exists) {
      return res.status(404).json({ error: 'product not found' })
    }

    res.json({ id: doc.id, ...doc.data() })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'failed to fetch product' })
  }
})

// get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const snapshot = await db.collection('products').get()
    const categories = [...new Set(snapshot.docs.map(doc => doc.data().category))]
    res.json(categories)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'failed to fetch categories' })
  }
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
