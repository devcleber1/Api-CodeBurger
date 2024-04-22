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

    const { filename: path } = request.file

    const categoryExist = await Category.findOne({
      where: { name }
    })

    if (categoryExist) {
      return response.status(409).json({ error: 'Category already exists' })
    }

    const { id } = await Category.create({ name, path })

    return response.status(201).json({ name, id })
  }

  async index (request, response) {
    const category = await Category.findAll()

    return response.json(category)
  }

  async update (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string()
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

    const { id } = request.params

    const category = await Category.findByPk(id)

    if (!category) {
      return response.status(401).json({ error: 'Make sure your category ID is correct' })
    }

    let path
    if (request.file) {
      path = request.file.name
    }

    const { name } = request.body

    await Category.update(
      {
        name,
        path
      },
      { where: { id } }
    )

    return response.status(200).json({ name, id })
  }
}

export default new CategoryController()
