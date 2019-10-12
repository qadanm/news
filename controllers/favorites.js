const Favorites = require('../models/user');
const User = require('../models/user')
// const userService = require('../src/utils/userService');

module.exports = {
    // createFavorite
    createFav
  };
  
//   function createFavorite(req, res) {
//     User.findById(req.params.id, function(err, user) {
//       user.articles.push(req.body);
//       Favorites.userId = userService.getUser();
//       user.save(function(err) {
//         res.render('/');
//       });
//     });
//   }

async function createFav(req, res) {
    try{
        const foundUser = await User.findById(req.params.id)
        console.log(foundUser)
    } catch(err) {
        return err
    }
}
