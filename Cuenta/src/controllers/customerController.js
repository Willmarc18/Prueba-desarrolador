const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cuenta', (err, customers) => {
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
        conn.query('INSERT INTO cuenta set ?', [data], (err, cuenta) => {
            res.redirect('/')
        });
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query ('SELECT * FROM cuenta WHERE id = ?', [id], (err, cuenta) => {
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
        conn.query ('UPDATE cuenta set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    })
};

controller.sacar =(req, res) => {
    const { id } = req.params; 
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cuenta WHERE id = ?', [id], (err, rows) => {
            res.redirect('/')
        });
    })
};

function mensaje() {
    alert("Se ha creado su cuenta")
}

function alerta() {
    alert("Se ha creado su cuenta")
}


module.exports = controller;