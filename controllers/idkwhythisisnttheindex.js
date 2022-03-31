const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const PostData = await Gallery.findAll({
        include: [
          {
            model: Painting,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
  
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });