const Producto = require('../models/Producto');

exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error al obtener productos');
  }
};

exports.createProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto (detalles):', error); // <--- ADD THIS LINE
    res.status(400).send('Error al crear producto');
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.json(producto);
  } catch (error) {
    res.status(500).send('Error al obtener producto');
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.json(producto);
  } catch (error) {
    res.status(400).send('Error al actualizar producto');
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).send('Producto no encontrado');
    }
    res.send('Producto eliminado');
  } catch (error) {
    res.status(500).send('Error al eliminar producto');
  }
};