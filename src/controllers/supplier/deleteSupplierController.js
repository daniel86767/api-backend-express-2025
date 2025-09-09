export const deleteSupplierController = (req, res) => {
    const { id, name } = req.params;
    res.json({
        message: `Fornecedor com ID ${id} e nome ${name} excluído com sucesso!`
    });
};