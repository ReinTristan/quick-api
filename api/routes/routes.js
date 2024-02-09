import { Router } from "express";

const router = Router()


router.get('/', (req, res) => {
    res.send('workea')
})
router.get('/another', (req, res) => {
    res.send('workea')
})

export default router