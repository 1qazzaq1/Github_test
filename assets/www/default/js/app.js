
/* JavaScript content from js/app.js in folder common */
'use strict';

var app = angular.module('ibmApp',['ngRoute','controllers','directives','hammer']);
var busyIndicator = new WL.BusyIndicator('content');
app.factory("busyIndicator",function(){
		return busyIndicator;
	}		
);

app.config(function($compileProvider){
   //  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript|tel|chrome-extension):/);
	 $compileProvider.aHrefSanitizationWhitelist(/^\s*(ftp|mailto|file|javascript|tel|chrome-extension):/);
     $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

});
/*route provider*/
app.config(["$routeProvider","$locationProvider",
    function($routeProvider){
        $routeProvider
            .when("/dashboard",{
                templateUrl: "partials/Dashboard.html",
                controller : "dashboardController"
            }).when("/borrowBooks",{
                templateUrl: "partials/Borrow_Books.html",
                controller : "borrowBooksController"
            }).when("/bookDetail",{
                templateUrl: "partials/Book_Details.html",
                controller : "bookDetailController"
            }).when("/addBook",{
                templateUrl: "partials/Add_Book.html",
                controller : "addBookController"
            }).when("/login",{
                templateUrl: "partials/Login.html",
                controller : "loginController"
            }).when("/leaderBoard",{
                templateUrl: "partials/Leaderboard.html",
                controller : "leaderBoardController"
            }).when("/profile/:userEmail",{
                templateUrl: "partials/Profile.html",
                controller : "profileController"
            }).when("/myBookList",{
                templateUrl: "partials/My_Book_list.html",
                controller : "myBookListController"
            }).when("/lendBook",{
                templateUrl: "partials/Lend_A_Books.html",
                controller : "lendBookController"
            }).when("/myBorrowing",{
                templateUrl: "partials/My_Borrowing_List.html",
                controller : "myBorrowingController"
            }).when("/search",{
                templateUrl: "partials/Search.html",
                controller : "searchController"
            }).when("/notificationList",{
                templateUrl: "partials/Alerts.html",
                controller : "notificationListController"
            }).when("/editBook",{
                templateUrl: "partials/Edit_Book.html",
                controller : "editBookController"
            }).otherwise({
                redirectTo: '/login'
            });
    }
]);

app.directive('onFinishRenderFilters', function ($timeout) {
    return {
        restrict: 'A', 
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
});
