import{Request,Response,NextFunction}from 'express';


const homePage  =  async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try{
        res.render('home')
    }catch(error){
        next(error)
    }
}
const addTask  = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const {newTask} = req.body
        res.redirect("/");
    } catch (error) {
        next(error)
    }

} 

export{
homePage,
addTask

}