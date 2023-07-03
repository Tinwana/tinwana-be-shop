import Products from "../model/products.js"

class ApiController {
    /* [GET] /api/products */
    product(req, res,next) {
        Products.find({})
        .then(product => res.status(201).json(product))
        .catch(next);
    }

    productAdd(req, res,next) {
        const formData = req.body;
        formData.slug = req.body.name;
        Products.create(formData)
        .then(()=> res.redirect('http://localhost:5173/admin/create'))
        
        .catch(next);
    }

    productUpdate(req, res, next) {
        Products.updateOne({_id: req.params.id}, req.body)
        .then(()=>{
            res.redirect('http://localhost:5173');
        })
    }
    productSoftDelete(req, res, next) {
        Products.delete({_id:req.params.id})
        .then(()=> res.redirect('http://localhost:5173'));
    }

    productDestroy(req, res, next) {
        Products.deleteOne({_id:req.params.id})
       .then(()=> res.redirect('http://localhost:5173'));
    }

    productId(req, res, next) {
        Products.findById({_id : req.params.id})
        .then(product => res.json(product))
        .catch(next); 
    }

    productSearch(req, res, next) {
        Products.find({ $text: { $search: req.query.q } })
        .exec()
        .then((products) => {
            res.json(products);
        })
        .catch((error) => {
            next(error);
        });
    }
/* ---------------------------------------------------------------- */
    users(req, res,next) {
        // Users.find({})
        // .then(Users => res.json(Users))
        // .catch(next);
    }
/* ------------------------------------------------------------------ */
    playlist(req, res,next) {
        // Playlist.find({})
        // .then(Playlist => res.json(Playlist))
        // .catch(next);
    }
}



export default new ApiController