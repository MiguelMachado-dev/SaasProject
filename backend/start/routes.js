'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.group(() => {
  // Todas as rotas dentro do group utilizarao o middleware que verifica autenticacao
  Route.resource('teams', 'TeamController').apiOnly() // apiOnly desativa create e edit
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store')
}).middleware(['auth', 'team'])
