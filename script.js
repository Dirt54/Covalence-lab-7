$(document).ready(function () {
    //create boxes
    var globArray = [];
    var Die = function () {
        this.div = document.createElement('div');
        this.roll();
        this.removeDie();
        this.div.addEventListener('click', this.roll.bind(this));
        this.div.addEventListener('dblclick', this.removeDie.bind(this));
        document.body.appendChild(this.div);
        globArray.push(this.div);
    }

    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.innerHTML = this.value;

    }
    Die.prototype.removeDie = function() {
        this.div.remove();
        var index = globArray.indexOf(this);
        globArray.splice(index, 1);
    }
    //create boxes

    //Role Dice
    var Secdie = function () {
        this.allrole();
    }

    Secdie.prototype.allrole = function () {
        for (i = 0; i < globArray.length; i++) {
            this.value = Math.floor(Math.random() * 6) + 1;
            $(globArray[i]).text(this.value);
        }

    }
    //Role Dice

    //create boxes
    var button1 = document.getElementById('button1');

    function createBoxes() {
        var newDie = new Die();
    }
    button1.addEventListener('click', createBoxes);
    //create boxes


    //Role Dice
    var button2 = document.getElementById('button2');

    function roledice() {
        var plzallrole = new Secdie();

    }
    button2.addEventListener('click', roledice);
    //Rol Dice


    var button3 = document.getElementById('button3');



    function sumnum() {
        // var count = 0;
        // count = count + value.globArray.length;

        // for (var j = 0; j < globArray.length; j++) {
        //     count = count + globArray[j].length.value;
             
        // }
        
        var sum = globArray.reduce(add, 0);
        function add(a, b) {
            return a + b; 
        }
        
            alert('The sum of all the boxes is ' + sum);
        
            
          
        }
    

        button3.addEventListener('click', sumnum);











    });