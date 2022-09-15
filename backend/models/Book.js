module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("tutorial", {
        title : {
            type : Sequelize.STRING
        },
        price : {
            type : Sequelize.STRING
        },
        description : {
            type : Sequelize.STRING
        }
    });

    return Book;
}
