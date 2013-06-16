'use strict';
angular.module('PhoneGap', []).factory('PhoneGap', [
  '$q',
  '$rootScope',
  '$document',
  function ($q, $rootScope, $document) {
    var deferred = $q.defer();
    $document.bind('deviceready', function () {
      $rootScope.$apply(deferred.resolve);
    });
    return {
      ready: function () {
        return deferred.promise;
      }
    };
  }
]).run([
  'PhoneGap',
  function (PhoneGap) {
  }
]);
'use strict';
angular.module('PhoneGap').factory('Accelerometer', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentAcceleration: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.accelerometer.getCurrentAcceleration(onSuccess, onError, options);
        });
      },
      watchAcceleration: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.accelerometer.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
var Camera = Camera || {
    PictureSourceType: {
      PHOTOLIBRARY: 0,
      CAMERA: 1,
      SAVEDPHOTOALBUM: 2
    },
    DestinationType: {
      DATA_URL: 0,
      FILE_URI: 1,
      NATIVE_URI: 2
    },
    EncodingType: {
      JPEG: 0,
      PNG: 1
    },
    MediaType: {
      PICTURE: 0,
      VIDEO: 1,
      ALLMEDIA: 2
    },
    Direction: {
      BACK: 0,
      FRONT: 1
    }
  };
angular.module('PhoneGap').factory('Camera', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    return {
      getPicture: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.camera.getPicture(onSuccess, onError, options);
        });
      },
      cleanup: function (onSuccess, onError) {
        PhoneGap.ready().then(function () {
          $window.navigator.camera.cleanup(onSuccess, onError);
        });
      },
      PictureSourceType: Camera.PictureSourceType,
      DestinationType: Camera.DestinationType,
      EncodingType: Camera.EncodingType,
      MediaType: Camera.MediaType,
      Direction: Camera.Direction
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Capture', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    return {
      captureAudio: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
        });
      },
      captureImage: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureAudio(onSuccess, onError, options);
        });
      },
      captureVideo: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.device.capture.captureVideo(onSuccess, onError, options);
        });
      }
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Compass', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentHeading: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.compass.getCurrentHeading(onSuccess, onError, options);
        });
      },
      watchHeading: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.compass.watchHeading(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.compass.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Contacts', function () {
});
'use strict';
angular.module('PhoneGap').factory('Geolocation', [
  '$q',
  '$window',
  'PhoneGap',
  function ($q, $window, PhoneGap) {
    var idCounter = 0;
    var watchMap = {};
    return {
      getCurrentPosition: function (onSuccess, onError, options) {
        PhoneGap.ready().then(function () {
          $window.navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        });
      },
      watchPosition: function (onSuccess, onError, options) {
        var watchId = (++idCounter).toString(10);
        PhoneGap.ready().then(function () {
          watchMap[watchId] = $window.navigator.geolocation.watchPosition(onSuccess, onError, options);
        });
        return watchId;
      },
      clearWatch: function (watchId) {
        if (watchMap[watchId]) {
          PhoneGap.ready().then(function () {
            $window.navigator.geolocation.clearWatch(watchMap[watchId]);
            delete watchMap[watchId];
          });
        }
      }
    };
  }
]);
'use strict';
angular.module('PhoneGap').factory('Globalization', function () {
});
'use strict';
angular.module('PhoneGap').factory('Notification', function () {
});
'use strict';
angular.module('PhoneGap').factory('Splashscreen', function () {
});
'use strict';
angular.module('PhoneGap').factory('Storage', function () {
});