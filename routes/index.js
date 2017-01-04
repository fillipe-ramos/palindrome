var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
	if (req.query['palindrome'] != null){
		var isPalindrome = fastestIsPalindrome(req.query['palindrome']);
		if (isPalindrome == true){
			res.status(200).render('index', { success: true, text: req.query['palindrome']});
		}else{
			res.status(400).render('index', { success: false, text: req.query['palindrome']});
		}
	}else{
		res.render('index');
	}
});

function fastestIsPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

module.exports = router;
