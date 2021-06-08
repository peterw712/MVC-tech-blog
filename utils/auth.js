// checks if user is logged in and redirects to login page if they are not
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;