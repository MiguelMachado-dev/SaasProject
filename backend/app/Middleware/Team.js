'use strict'

class Team {
  async handle ({ request, response, auth }, next) {
    // recebemos informacao do time do usuario pelo header da request
    const slug = request.header('TEAM')

    let team = null

    if (slug) {
      // buscar time a partir do usuario logado
      team = await auth.user
        .teams()
        .where('slug', slug)
        .first()

      // aqui team tem o valor do team do user logado
    }

    // se esse team do header da request nao existir, enviamos err 401
    if (!team) {
      return response.status(401).send()
    }

    auth.user.currentTeam = team.id
    request.team = team

    // call next to advance the request
    await next()
  }
}

module.exports = Team
