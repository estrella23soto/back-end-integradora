import { getconexion} from "./../database/database";

// todos los cursos 
const getCurso = async (req, res)=>{
    try {
        const conexion=  await getconexion();
        //const conexion=   getconexion();
        const result = await conexion.query("SELECT * FROM curso")
        // const result = conexion.query("SELECT * FROM curso")

 res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};
//un solo curo
const getUnCurso = async (req, res)=>{
    try {
        console.log(req.params)
        const{ id } = req.params 
        const conexion=  await getconexion();
        //const conexion=  getconexion();
        const result = await conexion.query("SELECT * FROM curso WHERE cveCurso = ?",id)

       // const result = conexion.query("SELECT * FROM curso WHERE cveCurso = ?",id)

 res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};
//RSGISTRO DE UN NUEVO CURSO 
const addCurso= async (req, res) => {
    try {
        //constante requiere el body
        const{cveCurso, cvePersona, nombre, descripcion, numHoras, activo, estatus, fechaCreado, fechaRevision, comentarios}= req.body;
        // if(cvePersona==undefined){
        //     res.status(400).json({message:"respuesta errorea por favor llene los campos"});
        // }
        //const conexion=  getconexion();
         const conexion = await getconexion();
        const curso = {cveCurso, cvePersona, nombre, descripcion, numHoras, activo, estatus, fechaCreado, fechaRevision, comentarios};
        await conexion.query("INSERT INTO curso SET ?", curso); 
       // conexion.query("INSERT INTO curso SET ?", curso);
        res.json({message: "INSERCION EXITOSA!!!"});
        
    } catch (error) {
        res.status(500);
        res.send(erorr.message);
        
    }
};
//eliminar curso
const deleteCurso = async (req, res) => {
    try {
        
        const{ id } = req.params;
        console.log(req.params)
        const conexion =  await getconexion();
        //const conexion=  getconexion();
        const result = await conexion.query("DELETE FROM curso WHERE cveCurso = ?",id)

       // const result = conexion.query("SELECT * FROM curso WHERE cveCurso = ?",id)

 res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};
//UPDATE 
const updateCurso = async (req, res) => {
    try {
        console.log(req.params);
        const{ id } = req.params ;
        
        const{cveCurso, cvePersona, nombre, descripcion, numHoras, activo, estatus, fechaCreado, fechaRevision, comentarios}= req.body;
       // const curso = {cveCurso, cvePersona, nombre, descripcion, numHoras, activo, estatus, fechaCreado, fechaRevision, comentarios};
        const conexion =  await getconexion();
        const data= req.body;
        const result = await conexion.query("UPDATE curso SET  ? WHERE cveCurso  = ? " ,[data, id]);
        
        //res.redirect('./lista');
        console.json({message: 'actualizacion exitosa'});
         } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
}


export const methods ={
    getCurso,
    getUnCurso,
    addCurso,
    deleteCurso,
    updateCurso
}

// console.log(cveCurso);
        // console.log(cvePersona);
        // console.log(nombre);
        // console.log(descripcion);
        // console.log(numHoras);
        // console.log(activo);
        // console.log(estatus);
        // console.log(fechaCreado);
        // console.log(fechaRevision);
        //  console.log(comentarios);