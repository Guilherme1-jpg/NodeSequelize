import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/novousuario', HomeController.novoUsuario);

router.get('/usuario/:id/lot', UserController.addAge);
router.get('/usuario/:id/less', UserController.decreIdade);
router.get('/usuario/:id/exclude', UserController.deleteItem);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;