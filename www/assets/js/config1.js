

waldayu.transducers["underline_norm"] = (function() {
    var correspondences = {'x\u0331': 'x\u0332', '\u01e5': 'g\u0332', 'g\u0331': 'g\u0332', 'G\u0331': 'G\u0332', 't\u0331s\u0331': 't\u0332s\u0332', 's\u0331': 's\u0332', 'd\u0331z\u0331': 'd\u0332z\u0332', 'K\u0331': 'K\u0332', 'a\u0331': 'a\u0332', 'k\u0331': 'k\u0332', '\u1e35': 'k\u0332', '\u1e34': 'K\u0332', 'X\u0331': 'X\u0332'};
    var keys = ['t\u0331s\u0331', 'd\u0331z\u0331', 'x\u0331', 'g\u0331', 'G\u0331', 's\u0331', 'K\u0331', 'a\u0331', 'k\u0331', 'X\u0331', '\u01e5', '\u1e35', '\u1e34'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["macron_lowline_norm"] = (function() {
    var correspondences = {'A\u0331': 'A\u0332', 'x\u0331': 'x\u0332', 'g\u0331': 'g\u0332', 'G\u0331': 'G\u0332', 'K\u0331': 'K\u0332', 'a\u0331': 'a\u0332', 'k\u0331': 'k\u0332', 'X\u0331': 'X\u0332'};
    var keys = ['A\u0331', 'x\u0331', 'g\u0331', 'G\u0331', 'K\u0331', 'a\u0331', 'k\u0331', 'X\u0331'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_display"] = (function() {
    var correspondences = {'aa': 'aa', 'gw': 'gw', 'ee': 'ee', ".'l": " 'l", 'gy': 'gy', 'ii': 'ii', 'n': 'n', 'xw': 'xw', "k'": "k'", 'g_': 'g\u0331', ".'m": " 'm", ".'n": " 'n", 'ts': 'ts', ".'": " '", ".'w": " 'w", 'x_': 'x\u0331', 'u': 'u', ".'y": " 'y", "k_'": "k\u0331'", 't': 't', 'oo': 'oo', " '": " '", "kw'": "kw'", "ky'": "ky'", 'hl': 'hl', 'x': 'x', 'uu': 'uu', 'k_': 'k\u0331', 'ky': 'ky', 'a': 'a', " 'w": " 'w", 'b': 'b', 'e': 'e', 'd': 'd', 'g': 'g', 'i': 'i', 'h': 'h', 'k': 'k', 'm': 'm', 'l': 'l', 'o': 'o', " 'y": " 'y", 'p': 'p', 'kw': 'kw', "p'": "p'", 'w': 'w', "ts'": "ts'", " 'n": " 'n", "t'": "t'", " 'l": " 'l", " 'm": " 'm"};
    var keys = [".'l", ".'m", ".'n", ".'w", ".'y", "k_'", "kw'", "ky'", " 'w", " 'y", "ts'", " 'n", " 'l", " 'm", 'aa', 'gw', 'ee', 'gy', 'ii', 'xw', "k'", 'g_', 'ts', ".'", 'x_', 'oo', " '", 'hl', 'uu', 'k_', 'ky', 'kw', "p'", "t'", 'n', 'u', 't', 'x', 'a', 'b', 'e', 'd', 'g', 'i', 'h', 'k', 'm', 'l', 'o', 'p', 'w'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_approx"] = (function() {
    var correspondences = {'aa': 'a', 'ee': 'e', 'ii': 'i', "k'": 'k', "'": '', 'g_': 'g', 'k\u0332': 'k', "k\u0331'": 'k', 'x_': 'x', "'w": 'w', 'g\u0332': 'g', "kw'": 'kw', "'y": 'y', 'x\u0332': 'x', "'n": 'n', "'m": 'm', "'l": 'l', 'k_': 'k', 'oo': 'o', 'uu': 'u', "ts'": 'ts', "p'": 'p', "t'": 't'};
    var keys = ["k\u0331'", "kw'", "ts'", 'aa', 'ee', 'ii', "k'", 'g_', 'k\u0332', 'x_', "'w", 'g\u0332', "'y", 'x\u0332', "'n", "'m", "'l", 'k_', 'oo', 'uu', "p'", "t'", "'"];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_compare_composite"] = (function(){
    var orths = ['underline_norm', 'macron_lowline_norm', 'gitksan_display', 'gitksan_approx'];
    return function(str) {
        for (var i = 0; i < orths.length; i++) {
            transducer = waldayu.transducers[orths[i]];
            str = transducer(str);
        }
        return str;
    };
})();

waldayu.transducers["underline_norm"] = (function() {
    var correspondences = {'x\u0331': 'x\u0332', '\u01e5': 'g\u0332', 'g\u0331': 'g\u0332', 'G\u0331': 'G\u0332', 't\u0331s\u0331': 't\u0332s\u0332', 's\u0331': 's\u0332', 'd\u0331z\u0331': 'd\u0332z\u0332', 'K\u0331': 'K\u0332', 'a\u0331': 'a\u0332', 'k\u0331': 'k\u0332', '\u1e35': 'k\u0332', '\u1e34': 'K\u0332', 'X\u0331': 'X\u0332'};
    var keys = ['t\u0331s\u0331', 'd\u0331z\u0331', 'x\u0331', 'g\u0331', 'G\u0331', 's\u0331', 'K\u0331', 'a\u0331', 'k\u0331', 'X\u0331', '\u01e5', '\u1e35', '\u1e34'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["macron_lowline_norm"] = (function() {
    var correspondences = {'A\u0331': 'A\u0332', 'x\u0331': 'x\u0332', 'g\u0331': 'g\u0332', 'G\u0331': 'G\u0332', 'K\u0331': 'K\u0332', 'a\u0331': 'a\u0332', 'k\u0331': 'k\u0332', 'X\u0331': 'X\u0332'};
    var keys = ['A\u0331', 'x\u0331', 'g\u0331', 'G\u0331', 'K\u0331', 'a\u0331', 'k\u0331', 'X\u0331'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_display"] = (function() {
    var correspondences = {'aa': 'aa', 'gw': 'gw', 'ee': 'ee', ".'l": " 'l", 'gy': 'gy', 'ii': 'ii', 'n': 'n', 'xw': 'xw', "k'": "k'", 'g_': 'g\u0331', ".'m": " 'm", ".'n": " 'n", 'ts': 'ts', ".'": " '", ".'w": " 'w", 'x_': 'x\u0331', 'u': 'u', ".'y": " 'y", "k_'": "k\u0331'", 't': 't', 'oo': 'oo', " '": " '", "kw'": "kw'", "ky'": "ky'", 'hl': 'hl', 'x': 'x', 'uu': 'uu', 'k_': 'k\u0331', 'ky': 'ky', 'a': 'a', " 'w": " 'w", 'b': 'b', 'e': 'e', 'd': 'd', 'g': 'g', 'i': 'i', 'h': 'h', 'k': 'k', 'm': 'm', 'l': 'l', 'o': 'o', " 'y": " 'y", 'p': 'p', 'kw': 'kw', "p'": "p'", 'w': 'w', "ts'": "ts'", " 'n": " 'n", "t'": "t'", " 'l": " 'l", " 'm": " 'm"};
    var keys = [".'l", ".'m", ".'n", ".'w", ".'y", "k_'", "kw'", "ky'", " 'w", " 'y", "ts'", " 'n", " 'l", " 'm", 'aa', 'gw', 'ee', 'gy', 'ii', 'xw', "k'", 'g_', 'ts', ".'", 'x_', 'oo', " '", 'hl', 'uu', 'k_', 'ky', 'kw', "p'", "t'", 'n', 'u', 't', 'x', 'a', 'b', 'e', 'd', 'g', 'i', 'h', 'k', 'm', 'l', 'o', 'p', 'w'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_approx"] = (function() {
    var correspondences = {'aa': 'a', 'ee': 'e', 'ii': 'i', "k'": 'k', "'": '', 'g_': 'g', 'k\u0332': 'k', "k\u0331'": 'k', 'x_': 'x', "'w": 'w', 'g\u0332': 'g', "kw'": 'kw', "'y": 'y', 'x\u0332': 'x', "'n": 'n', "'m": 'm', "'l": 'l', 'k_': 'k', 'oo': 'o', 'uu': 'u', "ts'": 'ts', "p'": 'p', "t'": 't'};
    var keys = ["k\u0331'", "kw'", "ts'", 'aa', 'ee', 'ii', "k'", 'g_', 'k\u0332', 'x_', "'w", 'g\u0332', "'y", 'x\u0332', "'n", "'m", "'l", 'k_', 'oo', 'uu', "p'", "t'", "'"];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();

waldayu.transducers["gitksan_compare_composite"] = (function(){
    var orths = ['underline_norm', 'macron_lowline_norm', 'gitksan_display', 'gitksan_approx'];
    return function(str) {
        for (var i = 0; i < orths.length; i++) {
            transducer = waldayu.transducers[orths[i]];
            str = transducer(str);
        }
        return str;
    };
})();

var config = {
    "L1": {
        "name": "Gitksan",
        "underlying": "gitksan_compare_composite",
        "compare": "gitksan_compare_composite",
        "optionalField": "Notes",
        "lettersInLanguage" : ['a', 'aa', 'b', 'd', 'e', 'ee', 'g', 'g\u0331', 'gw', 'gy', 'h', 'hl', 'i', 'ii', 'j', 'k', 'k\u0331', "k'", "k\u0331'", 'kw', "kw'", 'ky', "ky'", 'l', "'l", 'm', "'m", 'n', "'n", 'o', 'oo', 'p', "p'", 's', 't', "t'", 'ts', "ts'", 'u', 'uu', 'w', "'w", 'x', 'x\u0331', 'xw', 'y', "'y", "'"]
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    },
    "department": "University of British Columbia",
    "PI": ['Henry Davis'],
    "developers": ['Patrick Littell', 'Aidan Pine'],
    "lexicographers": ['Gitksan Research Lab']
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};

var build = 1;
