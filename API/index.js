import {Router} from 'express';
let router = Router()

router.get('/', (req,res) => {
    res.json( {"data": "Home page"})
})


export default router;