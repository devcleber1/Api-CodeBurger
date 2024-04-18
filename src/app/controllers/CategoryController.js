import * as Yup from 'yup'
import Category from '../models/Category'
import User from '../models/Users'

class CategoryController {
  async store (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false }) // abortEarly => manda todos os erros.
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { admin: isAdmin } = await User.findByPk(request.userId)

    if (!isAdmin) {
      return response.status(401).json()
    }

    const { name } = request.body

    const categoryExist = await Category.findOne({
      where: { name }
    })

    if (categoryExist) {
      return response.status(409).json({ error: 'Category already exists' })
    }

    const { id } = await Category.create({ name })

    return response.status(201).json({ name, id })
  }

  async index (request, response) {
    const category = await Category.findAll()

    return response.json(category)
  }
}

export default new CategoryController()
