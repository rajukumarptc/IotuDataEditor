var iotuEditorApp = angular.module('iotuEditorApp', []);

iotuEditorApp.controller("mainController", mainController);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.moment = moment;

    // when landing on the page, get all todos and show them
    $http.get('/courses')
        .success(function(data) {
            $scope.courses = data;
            console.log("data returned : ",data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createCourse = function() {
        if(!$scope.formData.title || !$scope.formData.courseId || !$scope.formData.type || !$scope.formData.launchLink)
            return;
        $http.post('/courses', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.courses = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a course after checking it
    $scope.deleteCourse = function(id) {
        $http.delete('/courses/' + id)
            .success(function(data) {
                $scope.courses = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };

}
