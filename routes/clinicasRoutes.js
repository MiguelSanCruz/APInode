const express = require('express');
const router = express.Router();
const clinicasController = require('../controllers/clinicasControllers');

// Rota para obter todas as clínicas
router.get('/', clinicasController.allclinicas);

// Rota para obter uma clínica por ID
router.get('/:id', clinicasController.clinicaById);

// Rota para obter os médicos de uma clínica 
router.get('/:id/medicos', clinicasController.getMedicosByClinica);

//Rota para obeter as especialidades de uma clínica
router.get('/especialidades/:especialidade', clinicasController.getEspecialidadesByClinica);

// Rota para criar uma nova clínica
router.post('/', clinicasController.createClinica);

// Rota para atualizar uma clínica existente
router.put('/:id', clinicasController.updateClinica);

// Rota para deletar uma clínica
router.delete('/:id', clinicasController.deleteClinica);

module.exports = router;