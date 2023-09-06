
/**
 * GET/
 * Homepage
 */

exports.homepage = async (req, res) => {    //async function for database stuff

    const locals = {
        title : "Node Js",
        description : "User Management System"
    }
    
    res.render('index', locals);
}