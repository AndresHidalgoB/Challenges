const { response } = require("express");
const Task = require("../models/TaskScheme");


const crearTask = async (req, res = response) => {
  const task = new Task(req.body);

  try {
    task.user = req.uid;

    const saved = await task.save();
    res.json({
      ok: true,
      task: saved,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      task: "Internal Error",
    });
  }
};

const listarTask = async (req, res = response) => {
    const task = await Task.find().populate('user','name');

    try{
        res.status(200).json({
            ok:true,
            task
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            ok: false,
            msg: 'Internal Error'
        })
    }
};

const actualizarTask = async (req, res = response) => {
    const taskId = req.params.id;
    const { title } = req.body;
  
    try {
      // Buscar la tarea por su ID
      const task = await Task.findById(taskId);
  
      // Verificar si la tarea existe
      if (!task) {
        return res.status(404).json({
          ok: false,
          msg: 'Tarea no encontrada',
        });
      }
  
      // Verificar si el usuario es el mismo que creó la tarea
      if (task.user.toString() !== req.uid) {
        return res.status(401).json({
          ok: false,
          msg: 'No tienes permiso para actualizar esta tarea',
        });
      }
  
      // Actualizar el título de la tarea
      task.title = title;
      const updatedTask = await task.save();
  
      res.json({
        ok: true,
        task: updatedTask,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        msg: 'Error interno',
      });
    }
  };
  
  const eliminarTask = async (req, res = response) => {
    const taskId = req.params.id;
  
    try {
      // Buscar la tarea por su ID
      const task = await Task.findById(taskId);
  
      // Verificar si la tarea existe
      if (!task) {
        return res.status(404).json({
          ok: false,
          msg: 'Tarea no encontrada',
        });
      }
  
      // Verificar si el usuario es el mismo que creó la tarea
      if (task.user.toString() !== req.uid) {
        return res.status(401).json({
          ok: false,
          msg: 'No tienes permiso para eliminar esta tarea',
        });
      }
  
      // Eliminar la tarea
      await task.remove();
  
      res.json({
        ok: true,
        msg: 'Tarea eliminada',
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        ok: false,
        msg: 'Error interno',
      });
    }
  };
  

module.exports = {crearTask,listarTask,actualizarTask,eliminarTask}
