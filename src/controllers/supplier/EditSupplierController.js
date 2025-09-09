export const editSupplierController = (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    console.log(dados);
    res.json({
        message: `Fornecedor com ID ${id} editado com sucesso!`,
        updatedData: dados
    });
};