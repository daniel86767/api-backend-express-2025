import { verify } from "jsonwebtoken"

export const authenticador = (req, res , next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(401).json ({messge:'nâo autorizado!'})
    }
    const token =authHeader.split('')[1]}
    if(!token){
        return res.status(401).json({ message: 'não autorizado!'})
    }
    try{
const payload = jwt.verify(token,process.env.jwt_secret)
req.userLoggd=payload
}catch (err){
    console.error("erro ao verificar:" ,err)

}