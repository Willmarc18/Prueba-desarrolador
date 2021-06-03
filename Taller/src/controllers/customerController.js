const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save =(req, res) => {
    
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', [data], (err, cliente) => {
            res.redirect('/')
        });
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query ('SELECT * FROM cliente WHERE id = ?', [id], (err, cliente) => {
            res.render('customer_edit', {
                data: cliente[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query ('UPDATE cliente set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    })
};

controller.delete =(req, res) => {
    const { id } = req.params; 
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
            res.redirect('/')
        });
    })
};


module.exports = controller;