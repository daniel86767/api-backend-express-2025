export const logger = (req, res, next) => {
    // mostrar data com timezone de são paulo
    console.log(`${req.method} ${req.originalUrl} ${new Date().toDateString('pt-br', {timeZone: 'America/Sao_Paulo'})}`)
    next()
}