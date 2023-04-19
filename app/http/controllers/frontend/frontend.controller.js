module.exports = {
    home: async (req, res) => {
        return res.send("home");
    },
    about: async (req, res) => {
        return res.send("about");
    },
    contact: async (req, res) => {
        return res.send("contact");
    },
    login: async (req, res) => {
        return res.render("auth/login");
    },

    signup: async (req, res) => {
        return res.send("signup");
    },
};
