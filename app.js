    
angular.module('mom_cards', ['ngTouch']);

function ChoiceCtrl($scope) {
    $scope.scenarios = scenarios_list;
    $scope.cards = cards_list;
    $scope.keeper_cards = keeper_cards_list;

    $scope.story = {
        scenario: 1,
        choices: [
            {id:1, values: ['1A','1B','1C'], selected:'', visible: true},
            {id:2, values: ['2A','2B'], selected:'', visible: true},
            {id:3, values: ['3A','3B'], selected:'', visible: true},
            {id:4, values: ['4A','4B'], selected:'', visible: true},
            {id:5, values: ['5A','5B'], selected:'', visible: true},
            {id:6, values: ['6A','6B'], selected:'', visible: true}
        ]
    };

    $scope.$watchCollection('story.scenario', function() {
        for (var i = 0; i < $scope.story.choices.length; i++) {
            $scope.story.choices[i].selected = '';
            $scope.story.choices[i].visible = true;
            if (
                ($scope.story.scenario == 1 && i > 2) ||
                ($scope.story.scenario == 2 && i > 3) ||
                ($scope.story.scenario == 3 && i > 4) ||
                ($scope.story.scenario == 4 && i > 3)
            ) {
                $scope.story.choices[i].visible = 'hide';
            }
        }
        $scope.setup = { cards: [], cards_rnd: [], map: [] };
    });

    $scope.$watch('story.choices', function() {
        var is_ready = 1;
        for (var i = 0; i < $scope.story.choices.length; i++) {
            if ($scope.story.choices[i].visible == true && $scope.story.choices[i].selected == '') {
                is_ready = 0;
            }
        }
        if (is_ready == 1) {
            eval('$scope.setup = map_scenario_' + $scope.story.scenario + '($scope.story.choices);');
        }
    }, true); // deep inspection of array

    $scope.randomize = function() {
        for (var i = 0; i < $scope.story.choices.length; i++) {
            var v = Math.floor(Math.random() * $scope.story.choices[i].values.length)
            $scope.story.choices[i].selected = $scope.story.choices[i].values[v];
        }
    };
}
