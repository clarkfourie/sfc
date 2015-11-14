var moment = require('alloy/moment');
var USERNAME = 'user',
    PASSWORD = 'password',
    AUTHKEY = 'somelongauthkeyforvalidation';
exports.definition = {
	config: {
		"columns": {
			"username":"text primary key",
            "realname":"text",
            "email":"text",
			"loggedIn":"integer",
            "loggedInSince":"text",
            "authKey":"text",
            "theme":"integer"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "user",
            "idAttribute": "username"
		}
	},
	extendModel : function(Model) {
        _.extend(Model.prototype, {
            login: function(username, password) {
				// Fake login used for demonstration. Don't do this.
                if (username === USERNAME && password === PASSWORD) {
                    this.set({
                        loggedIn: 1,
                        loggedInSince: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
                        authKey: AUTHKEY
                    });
                    this.save();
                    return true;
                } else {
                    return false;
                }
            },
            logout: function() {
                this.set({
                    loggedIn: 0,
                    loggedInSince: '',
                    authKey: ''
                });
                this.save();
            },
            validateAuth: function() {
                if (this.get('loggedIn') === 1 && this.get('authKey') === AUTHKEY) {
                    return true;
                } else {
                    return false;
                }
            },
            transform: function() {
                var t = this.toJSON();
                t.themeBGColor = t.theme === 2 ? '#00f' : t.theme === 1 ? '#ff0' : '#963';
                t.themeImage = t.theme === 2 ? '/jeans.png' : t.theme === 1 ? '/banana.jpg' : '/family.jpg';
                return t;
            }
        });
        return Model;
    }
};