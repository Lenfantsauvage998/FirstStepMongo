1. use Personas 
Show collections 
db.createCollection ("personas",{})
db.personas.insertOne({ nombre: 'Juan Perez', edad: 30, cuidad: 'Nueva York', })
db.personas.insertOne({ nombre: 'Maria Gonzales', edad: 35, cuidad: 'Los Angeles',}) 
db.personas.insertOne({ nombre: 'Carlos Ramirez', edad: 28, cuidad: 'Nueva York',})

2.db.personas.find()

3.db.personas.find({ edad: { $gte: 25 } })

4.db.personas.updateOne({ nombre: 'Juan Perez' }, {$set: {edad:31}})

5.db.personas.updateMany({ edad:{$gte:25, $lte:31}} , {$set:{cuidad: 'Nueva York'}})