//get homepage
exports.homepage = async (req, res) => {

    const locals = {
        title: 'NodeJs notes',
        description: ' Free NodeJs Notes App'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    })

}

//get aboutpage
exports.about = async (req, res) => {

    const locals = {
        title: 'About-NodeJs notes',
        description: ' Free NodeJs Notes App'
    }
    res.render('about', locals)

}