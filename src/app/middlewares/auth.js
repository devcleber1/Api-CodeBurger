import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default (request, response, next) => {
  /* Pegando dentro do header */
  const authToken = request.headers.authorization

  /* Verificando se o token não existir */
  if (!authToken) {
    return response.status(401).json({ error: 'Token not provided' })
  }

  /* Separando do Bearer, pegando na posição 1 do array */
  const token = authToken.split(' ')[1]

  /* Verificação se o token é válido */
  try {
    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        throw new Error()
      }

      request.userId = decoded.id
      request.userName = decoded.name

      return next()
    })
  } catch (err) {
    return response.status(401).json({ error: 'Token is Invalid' })
  }
}
