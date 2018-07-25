const DynamoDB = require ('./dynamoDbClient');

function TimeZoneRecord() {
	this.dyanmoDBClient = new DynamoDB();
	this.tableName = "timezones";
	this.timeZoneRecords = {
		"timezones": []
	}
}

TimeZoneRecord.prototype.getByZip = function (zipCode) {
  const params = {
    TableName: this.tableName,
    Key: {
      "zipCode" : zipCode,
    }
  };
  
  return new Promise((resolve, reject) => {
    this.dyanmoDBClient.getRecord(params, (err, response) => {
      if (err) {
        reject(err);
      } else {
        const results = {};
        if (response.Item) {
          results.location = response.Item;
        }
        resolve(results);
      }
    });
  });
};

TimeZoneRecord.prototype.getByCityState = function(city, state) {
  city = city.toLowerCase();
  state = state.toLowerCase();
  const params = {
    TableName: this.tableName,
    IndexName: 'city-state-index',
    KeyConditionExpression: '#cs = :cs',
    ExpressionAttributeNames: {
      "#cs": 'city-state'
    },
    ExpressionAttributeValues: {
      ':cs': `${city}_${state}`
    }
  };
  
  return new Promise((resolve, reject) => {
    this.dyanmoDBClient.query(params, (err, response) => {
      if (err) {
        reject(err);
      } else
      {
        const results = {};
        if(response.Items && response.Items.length > 0) {
          results.location = response.Items[0];
        }
        resolve(results);
      }
    });
  });
};

module.exports = TimeZoneRecord;