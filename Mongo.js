1. use Personas 
Personas> db.productos.insertOne({ nombre: 'Juan Perez', edad: 30, cuidad: 'Nueva York', })
Personas> db.productos.insertOne({ nombre: 'Maria Gonzales', edad: 35, cuidad: 'Los Angeles', 
Personas> db.productos.insertOne({ nombre: 'Carlos Ramirez', edad: 28, cuidad: 'Nueva York',})

2.Personas> db.productos.find()

3.Personas> db.productos.find({ edad: { $gte: 25 } })

{



4.Personas> db.productos.updateOne({ nombre: 'Juan Perez' }, {$set: {edad:31}})

5.db.productos.updateMany({$and: [{ edad: { $gte: 25 } },{ cuidad: 'Nueva York' }]},{ $set: { cuidad: 'Los Angeles' } })cd 