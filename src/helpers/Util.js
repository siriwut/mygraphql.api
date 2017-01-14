var async = require('async'),
    fs = require('fs'),
    log4js = require('log4js'),
    path = require('path');

var logger = log4js.getLogger('graphql');

var Time = {
  diff: function (earlierDate, laterDate, flag) {
    var oDiff = new Object();

    //  Calculate Differences
    //  -------------------------------------------------------------------  //
    var nTotalDiff = laterDate.getTime() - earlierDate.getTime();

    oDiff.days = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
    nTotalDiff -= oDiff.days * 1000 * 60 * 60 * 24;

    oDiff.hours = Math.floor(nTotalDiff / 1000 / 60 / 60);
    nTotalDiff -= oDiff.hours * 1000 * 60 * 60;

    oDiff.minutes = Math.floor(nTotalDiff / 1000 / 60);
    nTotalDiff -= oDiff.minutes * 1000 * 60;

    oDiff.seconds = Math.floor(nTotalDiff / 1000);
    //  -------------------------------------------------------------------  //

    //  Format Duration
    //  -------------------------------------------------------------------  //
    //  Format Hours
    var hourtext = '00';
    if (oDiff.days > 0){ hourtext = String(oDiff.days);}
    if (hourtext.length == 1){hourtext = '0' + hourtext};

    //  Format Minutes
    var mintext = '00';
    if (oDiff.minutes > 0){ mintext = String(oDiff.minutes);}
    if (mintext.length == 1) { mintext = '0' + mintext };

    //  Format Seconds
    var sectext = '00';
    if (oDiff.seconds > 0) { sectext = String(oDiff.seconds); }
    if (sectext.length == 1) { sectext = '0' + sectext };

    //  Set Duration
    var sDuration = hourtext + ':' + mintext + ':' + sectext;
    oDiff.duration = sDuration;
    //  -------------------------------------------------------------------  //
    var suffixDay  = " day";
    var suffixHour = " hour";
    var suffixMin  = " min";
    var suffixSec  = " sec";
    if(flag && flag == true){
      var suffixDay  = " day ago";
      var suffixHour = " hour ago";
      var suffixMin  = " minute ago";
      var suffixSec  = " second ago";
    }

    if(oDiff.days > 365) return "too old";
    else if(oDiff.days > 0) return oDiff.days+ suffixDay + (oDiff.days > 1 ? 's' : '');
    else if(oDiff.hours > 0) return oDiff.hours+suffixHour + (oDiff.hours > 1 ? 's' : '');
    else if(oDiff.minutes > 0) return oDiff.minutes+suffixMin + (oDiff.minutes > 1 ? 's' : '');
    else if(oDiff.seconds > 0) return oDiff.seconds+suffixSec + (oDiff.seconds > 1 ? 's' : '');

    return "few secs";
  },
  logDiff: function (from, name) {
    var to = new Date().getTime();
    var diff = to - from // this is a time in milliseconds
    var diff_as_date = new Date(diff);
    logger.debug(name+ ' : ' + diff_as_date.getMinutes() + ' mins ' + diff_as_date.getSeconds()+ ' sec');
  },
  range: function (months, days, now) {
    now = now || new Date();
    var from = new Date(now.getTime());
    if (months) from.setMonth(now.getMonth() - months);
    if (days) from.setDate(now.getDate() - days);

    return {
      start: from,
      end: now
    }
  },
  getTimestamp : function () {
    var date = new Date();
  
    var now = '';
    var midnightYtd = '';

    var thisDay = '';
    var lastWeek = '';
    var lastMonth = '';

    now = date.getTime();

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    thisDay = date.getTime();
    lastWeek = date.setDate(date.getDate()-7);
    lastMonth = date.setDate(date.getDate()-23);

    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(999);

    midnightYtd = date.setDate(date.getDate()+29);
    
    return {
      now: now,
      midnightYtd: midnightYtd,
      thisDay: thisDay,
      lastWeek: lastWeek,
      lastMonth: lastMonth
    }
  }
}

var StringUtil = {
  trim : function (word){
    return word.replace(/^\s+|\s+$/g, '');
  },
  split : function (seperator, string){
    var trimWord = StringUtil.trim(unescape(string));
    var result = [];
    if(trimWord.length > 0){
      var words = trimWord.split(seperator);
      for(var index in words){
        var word = words[index].trim();
        if(word.length > 0){
          result.push(word);
        }
      }
    }
    return result;
  },
  regExpSearch: function (key) {
    // http://stackoverflow.com/questions/8331988/how-to-turn-an-user-inputted-value-into-a-regexp-without-messing-up-with-special
    var reg = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']',
                                  '{', '}', '\\', '^', '$', '฿'].join('|\\') + ')', 'g');
    return key.replace(reg, '\\$1'); // "\[hello, world :\) \]"
  },
  decode: function (encodeStr) {
    var str = '';
    try {
      str = encodeStr ? decodeURIComponent(encodeStr) : '';
    }
    catch(ex) {
      str = encodeStr;
    }
    return str;
  }
}

var ConfigurationUtil = {
  baseUrl: function (configuration) {
    var scheme = configuration.secure ? 'https' : 'http';
    var hostname = configuration.hostname;
    return scheme + '://' + hostname + '/';
  }
}

var ArrayUtil = {
  contain: function (array, target) {
    return array.indexOf(target) >= 0;
  },
  remove: function (array, key) {
    array.splice(array.indexOf(key), 1);
  },
  shuffle: function (o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },
  sortByOccurrance: function (arrIn) {
    var count = function (arr) { // count occurances
      var o = {}, i;
      for (i = 0; i < arr.length; ++i) {
        if (o[arr[i]]) ++o[arr[i]];
        else o[arr[i]] = 1;
      }
      return o;
    }

    var o = count(arrIn);
    var arr = [];

    for (var i in o) arr.push(i);
    arr.sort(function (a, b) {
      return o[a] < o[b];
    });
    return arr;
  }
}

var UserUtil = {
  webFormat: function (user, userIdSession) {
    var tmpUser = {};

    if(user && userIdSession && user._id.toString() != userIdSession){
      tmpUser.viewOtherProfile = true;
    }

    tmpUser.country = user.country === 'TH' ? 'Thailand' : 'Singapore';
    tmpUser.map = user.country === 'TH' ? 'map_th.png' : 'map_sg.png';

    if(!user.detail || user.detail == 'undefined'){
      tmpUser.detail = 'No Detail.';
    }else if (user.detail || user.detail != '') {
      tmpUser.detail = user.detail;
    }

    tmpUser.shortname = user.shortname;
    if(user.avatar && user.avatar != 'undefined')
      tmpUser.avatar = user.avatar;
    tmpUser.firstname = user.firstname;
    tmpUser.lastname = user.lastname;
    tmpUser._id = user._id;

    return tmpUser;
  }
}

var StuffUtil = {
  webFormat: function (stuff){

    if (!stuff.description) {
      delete stuff.description;
    }
    else {
      stuff.description = stuff.description;
    }
    stuff.createDate = Time.diff(new Date(stuff.createDate), new Date());

    if (stuff.price == '0') {
      stuff.price = 'Free';
    }
    else {
      var currency = '฿ ';
      if (stuff.market == 'SG' || stuff.market == 'US') currency = '$ ' ;
      else if (stuff.market == 'CN') currency = '¥ ';

      stuff.price = currency + stuff.price;
    }

    if(stuff._comments){
      stuff.comments = stuff._comments.length;
      stuff._comments.forEach(function (comment) {
        comment.message = comment.message;
        comment.diff = Time.diff(new Date(comment.timestamp), new Date());
      });
    }else{
      stuff.comments = 0;
    }

    if (!stuff.likes) {
      stuff.likes = 0
    }
    else {
      stuff.likes = stuff.likes.length;
    }
    var tags = [];
    for (var index = 0; index < stuff.tags.length; index++) {
      tags.push({ name: stuff.tags[index] });
    }
    if(tags.length > 0){
      tags[tags.length - 1].lastTag = true;
    }
    stuff.tags = tags;

    stuff.location = JSON.stringify(stuff.location);

    return stuff;
  }
}

var SessionUtil = {
  getUser: function (session) {
    return (session && session.user) ? session.user.id : null;
  }
};

var ValidateUtil = {
  isObjectId: function (str) {
    // A valid Object Id must be 24 hex characters
    return (/^[0-9a-fA-F]{24}$/).test(str);
  }
};

exports.Time = Time;
exports.ArrayUtil = ArrayUtil;
exports.StringUtil = StringUtil;
exports.StuffUtil = StuffUtil;
exports.UserUtil = UserUtil;
exports.ConfigurationUtil = ConfigurationUtil;
exports.SessionUtil = SessionUtil;
exports.ValidateUtil = ValidateUtil;
