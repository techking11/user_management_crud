const mysql = require('mysql');
// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
});
// View User
exports.view = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        // User Connection
        connection.query("SELECT * FROM users WHERE status='active'", (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) res.render('home', {rows})
            else console.log(err);
        });
    });
}
// Search User
exports.find = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        let searchTerm = req.body.search;

        // User Connection
        connection.query("SELECT * FROM users WHERE first_name LIKE ? OR last_name LIKE ?",['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) res.render('home', {rows})
            else console.log(err);
        });
    });
}

// User Page View
exports.form = (req, res) => {
    res.render('add-user');
}

// User Page View
exports.create = (req, res) => {
    let {first_name, last_name, email, phone, comment} = req.body;
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        // User Connection
        connection.query("INSERT INTO users SET first_name = ?, last_name = ?, email = ?, phone = ?, comment = ?",[first_name, last_name, email, phone, comment], (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) res.render('add-user', {alert : "User Added Successfully !"});
            else console.log(err);
        });
    });
}

// Edit User
exports.edit = (req, res) => {

    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        // User Connection
        connection.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) res.render('edit-user', {rows})
        });
    });
}

// Update User
exports.update = (req, res) => {
    let {first_name, last_name, email, phone, comment} = req.body;
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        // User Connection
        connection.query("UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, comment = ? WHERE id = ?",[first_name, last_name, email, phone, comment, req.params.id], (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) {
                // Connect to DB
                pool.getConnection((err, connection) => {
                    if(err) throw err;
                    console.log("Connected as ID " + connection.threadId);

                    // User Connection
                    connection.query("SELECT * FROM users WHERE id = ?", [req.params.id], (err, rows) => {
                        // when done with the connection, release it
                        connection.release();

                        if(!err) res.render('edit-user', {rows, alert : "User Edited Successfully !"});
                    });
                });
            }
            else console.log(err);
        });
    });
}

// Delete User
exports.delete = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log("Connected as ID " + connection.threadId);

        // User Connection
        connection.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, rows) => {
            // when done with the connection, release it
            connection.release();

            if(!err) res.redirect('/');
        });
    });
}