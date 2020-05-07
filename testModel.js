const { User } = require('./models');
const bcrypt = require('bcrypt')

// User.findAll().then(
//     user => console.log(user)
// )

User.findByPk(1).then(
    user => console.log(user.password)
)

User.update(
    {
        password: bcrypt.hashSync('123',10),
        update_at: new Date(),
        create_at: '2020-04-30 23:45:09'
    }, {
        where: { id:1}
    }
)

User.findByPk(1).then(
    user => console.log(user.password)
)
