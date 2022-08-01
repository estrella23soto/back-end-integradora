import app from "./app";




const main=()=>{
    app.listen(app.get("port"));
    console.log(`servidor corriendo en el puerto  ${app.get("port")}` );

};

main();