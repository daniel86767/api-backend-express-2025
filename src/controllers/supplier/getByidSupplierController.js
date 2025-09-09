export const getByIdSupplierController = (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Fornecedor com ID ${id} consultado com sucesso!`
    });
};