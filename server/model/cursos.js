const mongoose = require('mongoose');
//Relacion entre Categoria y Producto
const { ObjectId } = mongoose.Schema
const schemaCurso = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      requrie: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Curso", schemaCurso);