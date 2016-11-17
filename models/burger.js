"use strict";

module.exports = function(sequelize, DataTypes) {
  
  	var Burger = sequelize.define("Burger", {
    	burger_name: DataTypes.STRING,
    	devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  		}, {
    
    	// converts all camelCased columns to snake case
    	underscored: true,
    	// disable the modification of tablenames; By default, sequelize will automatically
    	freezeTableName: true,
    	// define the table's name
    	tableName: 'burgers',

    	classMethods: {
      		associate: function(models) {}
        	}
    	});
    
	return Burger;
};