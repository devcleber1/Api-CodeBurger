import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/Users'

class UserController {
  async store (request, response) {
    /* Validação da criação do usuário */
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean()
    })

    /* Validção do schema */
    try {
      await schema.validateSync(request.body, { abortEarly: false }) // abortEarly => manda todos os erros.
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    /* Campo de corpo do usário */
    const { name, email, password, admin } = request.body

    /* Procurando no banco de dados um email  */
    const userExists = await User.findOne({
      where: { email }
    })

    /* Validação se o usuário existe */
    if (userExists) {
      return response.status(409).json({ error: 'User already exists' })
    }

    /* Criação do Usuario */
    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin
    })

    return response.status(201).json({ id: user.id, name, email, admin })
  }
}

export default new UserController()
