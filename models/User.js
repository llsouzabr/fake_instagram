module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        avatar: DataTypes.STRING,
        create_at: DataTypes.DATE,
        update_at: DataTypes.DATE,
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: 'users'
      }
    );
  
    // User.associate = (models) => {
    //   User.hasMany(models.Publication, {
    //     foreignKey: "users_id",
    //   });
    // };
  
    return User;
  };
