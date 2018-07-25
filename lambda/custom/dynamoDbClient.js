/*
	This dynamoDB client class takes care of CRUD operations
	like: create, read, update and delete.
	@author: ankjain
	
	INTERNAL: Methods tagged as INTERNAL should not be used from lambda handlers.
	EXPOSED	: Methods tagged as EXPOSED can be used from the lambda handlers.
*/
'use strict';
const AWS = require('aws-sdk');

//aws region where dynamoDB tables are present.
AWS.config.update({region: 'us-east-1'});

//contructor
function DynamoDB() {
	this.ddb = new AWS.DynamoDB();
	this.client = new AWS.DynamoDB.DocumentClient();
}

DynamoDB.prototype.batchWriteItem = function(params, callback) {
	console.log(JSON.stringify(params));
	this.ddb.batchWriteItem({ 'RequestItems': params}, callback);
}

/**
	This method is used to insert a new record.  This method overwrites
	the existing record id present.
**/
/* @INTERNAL */
DynamoDB.prototype.insertRecord = function(params, callback) {
  	this.client.put(params,callback);
};

/**
	This method is used to get the record.
**/
/* @INTERNAL */
DynamoDB.prototype.getRecord = function(params, callback) {
  	this.client.get(params,callback);
};

/**
	This method is used to update an existing record.
**/
/* @INTERNAL */
DynamoDB.prototype.updateRecord = function(params, callback) {
	this.client.update(params, callback);
};

module.exports = DynamoDB;
