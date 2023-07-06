export const allBlogsView = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).render('blogs', {
      title: 'All blogs',
      blogs,
    });
  } catch (error) {
    console.error(error);
  }
};

export const loginView = (req, res, next) => {
  res.status(200).render('login', { title: 'Login' });
};

export const homeView = (req, res, next) => {
  res.status(200).render('homepage', { title: 'Home' });
};
