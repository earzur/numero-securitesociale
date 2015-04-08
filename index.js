/*globals module, require */

var util = require('util');

function sex(data) {
    var result;

    switch (data) {
    case '1' :
    case '3' :
        result = 'M';
        break;
    case '2' :
    case '4' :
        result = 'F';
        break;
    }

    return result;
}

function isForeigner(data) {
    var result;

    switch (data) {
    case '1' :
    case '2' :
        result = false;
        break;
    case '3' :
    case '4' :
        result = true;
        break;
    }

    return result;
}

module.exports = {
    parse: function (NIR) {
        var exploitedNir = NIR,
            parts,
            result = {};

        if (!util.isArray(NIR)) {
            exploitedNir = NIR.toString().split('');
        }

        parts = {
            sex: exploitedNir.splice(0, 1)[0]
        };

        return result = {
            sex: sex(parts.sex),
            foreigner: isForeigner(parts.sex)
        };
    }
};