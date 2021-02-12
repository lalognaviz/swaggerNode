const express= require('express');
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUi= require('swagger-ui-express');

const app =express();

const swaggerOptions={
    swaggerDefinition:{
        info:{
            title:'Movies API',
            version:'1.2.3'
        }
    },
    apis:['app.js'],
};
const swaggerDocs= swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * /movies:
 *    get:
 *       description: get movies
 *       responses:
 *        200:
 *          description: Success
 * 
 */
app.get('/movies',(req,res)=>{
    res.send([

    {
        id:1,
        title:'harry potter'
    }

    ])
});

/**
 * @swagger
 * /movies/{id}:
 *    get:
 *       description: get movies
 *       parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: String
 *         required: true
 *         description: nombre cualquiera
 *       responses:
 *        200:
 *          description: Success
 * 
 */
app.get('/movies/:ide',(req,res)=>{
    res.send('hello '+req.params.ide)
});
app.listen(5000,()=>console.log("listen on 5000"))

