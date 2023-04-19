module.exports = {
    home: async (req, res) => {
        res.send("home");
    },
    about: async (req, res) => {
        res.send("about");
    },
    contact: async (req, res) => {
        res.send("contact");
    },
    login: async (req, res) => {
        res.send("login");
    },
    signup: async (req, res) => {
        res.send("signup");
    },
};
