
import express from 'express';
import * as controller from './controller.js';

const router = express.Router();

router.get('/brands', async (req, res) => {
    try {
        const brands = await controller.listAll();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/brands/:id', async (req, res) => {
    try {
        const brand = await controller.listOne(req.params.id);
        if (brand) {
            res.json(brand);
        } else {
            res.status(404).json({ error: 'brand not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/brands', async (req, res) => {
    try {
        const brand = await controller.create(req.body);
        res.status(201).json(brand); // 201 Created
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/brands/:id', async (req, res) => {
    try {
        const brand = await controller.edit(req.params.id, req.body);
        if (brand) {
            res.json(brand);
        } else {
            res.status(404).json({ error: 'brand not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/brands/:id', async (req, res) => {
    try {
        await controller.destroy(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
