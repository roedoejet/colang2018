

waldayu.transducers["heiltsuk_compare"] = (function() {
 var correspondences = {'aa': 'a', 'ee': 'e', 'ii': 'i', "'n": 'n', 'from': 'to', 'g_': 'g', 'k\u0332': 'k', "k\u0331'": 'k', 'x_': 'x', "'w": 'w', 'g\u0332': 'g', "kw'": 'kw', "'y": 'y', "'a": 'a', 'x\u0332': 'x', "k'": 'k', "'m": 'm', "'l": 'l', 'k_': 'k', 'oo': 'o', 'uu': 'u', "ts'": 'ts', "p'": 'p', "t'": 't'};
 var keys = ['from', "k\u0331'", "kw'", "ts'", 'g\u0332', 'x\u0332', 'k\u0332', 'g_', 'x_', 'k_', 'aa', 'ii', 'ee', 'oo', 'uu', "t'", "k'", "p'", "'l", "'n", "'m", "'w", "'y", "'a"];
 var regex = new RegExp("(" + keys.join('|') + ")", 'g');
 return function(str) {
     return str.replace(regex, function(a,b) {
         return correspondences[a];
     });
 };
})();var config = {
 "L1": {
     "name": "Heiltsuk",
     "underlying": "",
     "compare": "heiltsuk_compare",
     "lettersInLanguage" : ['a', 'aa', 'b', 'd', 'e', 'ee', 'g', 'g\\u0331', 'gw', 'gy', 'h', 'hl', 'i', 'ii', 'j', 'k', 'k\\u0331', "k'", "k\\u0331'", 'kw', "kw'", 'ky', "ky'", 'l', "'l", 'm', "'m", 'n', "'n", 'o', 'oo', 'p', "p'", 's', 't', "t'", 'ts', "ts'", 'u', 'uu', 'w', "'w", 'x', 'x\\u0331', 'xw', 'y', "'y", "'"]
 },
 "L2": {
     "name": "English",
     "underlying": "",
     "compare": ""
 }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
