const { raw } = require('express');
const ModeloClinica = require('../models/clinicasModels');

// Obtener todas las clínicas
exports.allclinicas = async (req, res) => {
    try {
        const clinicas = await ModeloClinica.find();
        res.json(clinicas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
// Obtener una clínica por ID
exports.clinicaById = async (req, res) => {
    try {
        const clinica = await ModeloClinica.findById(req.params.id);
        if (!clinica) {
            return res.status(404).json({ message: 'Clínica não encontrada' });
        };
        res.json(clinica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
// Obter médicos de uma clínica
exports.getMedicosByClinica = async (req, res) => {
    const id = req.params.id;
    try {
        const clinica = await ModeloClinica.findById(id);
        if (!clinica) {
            return res.status(404).json({ message: 'Clínica não encontrada' });
        };
        res.json(clinica.Medicos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
// Obter clinicas com especialidades especificas
exports.getEspecialidadesByClinica = async (req, res) => {
    const especialidade = req.params.especialidade;
    try {
        const clinicas = await ModeloClinica.find({ especialidades: especialidade });
        if (clinicas.length === 0) {
            return res.status(404).json({ message: 'Nenhuma clínica encontrada com essa especialidade' });
        };
        res.json(clinicas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};
// Criar um novo clínica
exports.createClinica = async (req, res) => {
    const clinica = req.body;
    try {
        await ModeloClinica.create(clinica);
        res.status(201).json("Nova clínica criada com sucesso");
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

// Atualizar uma clínica existente
exports.updateClinica = async (req, res) => {
    const id = req.params.id;
    const clinica = req.body;
    try {
        const updatedClinica = await ModeloClinica.findByIdAndUpdate(id, clinica);
        if (!updatedClinica) {
            return res.status(404).json({ message: 'Clínica não encontrada' });
        };
        res.status(200).json("Clínica atualizada com sucesso");
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};

// Delete a clínica (optional, not in routes)
exports.deleteClinica = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedClinica = await ModeloClinica.findByIdAndDelete(id);
        if (!deletedClinica) {
            return res.status(404).json({ message: 'Clínica não encontrada' });
        };
        res.status(200).json("Clínica deletada com sucesso");
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
};