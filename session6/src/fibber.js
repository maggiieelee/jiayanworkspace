/*
SESSION 5 - Coding Basics

1. Setting text of a div
2. If/then logic
3. Using the console
4. Creating objects to store data
5. Handling other events besides "click"

*/


//var is used to create variables
//using the {} to create a variable that is type object
var fibber = {};


//this is a function that can be called using fibber.init();

  fibber.initialize = function(){
  
  fibber.viewStatement(questionOne.statement, questionOne.context); 

  fibber.processDecision(questionOne,questionTwo);

};

	
 var  questionOne={
	 statement: "Am I above 20?",
     context: "-Maggie",
     isTrue: true
    };

 var  questionTwo={
	 statement: "Am I in New York?",
     context: "-Maggie",
     isTrue: true
    };

 var questionThree={
	 statement: "Am I taller than Hillary?",
   context: "-Maggie",
   isTrue: false
    };

 var questionPool=[questionOne,questionTwo,questionThree];

fibber.viewStatement = function (ST,CT){
	$("#statement-text").text(ST);
	$("#statement-context").text(CT);
};

fibber.processDecision = function(question1, question2){
    if(question1.isTrue==true){
    	$(".truth-btn").click(function(){
    		alert("YES YOU ARE RIGHT!");
    		fibber.viewStatement(question2.statement,question2.context);
    	    });
    	  } else if(question1.isTrue==false){
    	  	$(".truth-btn").click(function(){
    		alert("Opps,please try again...");
    		fibber.viewStatement(question1.statement,question1.context);
    	   });
    	  } 
       
        if(question1.isTrue==true){
    	$(".fib-btn").click(function(){
    		alert("Opps,please try again...");
    		fibber.viewStatement(question1.statement,question1.context);
    	    });
    	  } else if(question1.isTrue==false){
    	  	$(".truth-btn").click(function(){
    		alert("YES YOU ARE RIGHT!");
    		fibber.viewStatement(question2.statement,question2.context);
    	   });
    	  } 
   };

/*
fibber.processDecision = function(){ 
  fibber.viewStatement(questionOne.statement, questionOne.context); 
  
  for(i=0;i<=questionPool.length;i++){
      if(questionPool[i].isTrue==true){
      $(".truth-btn").click(function(){
        alert("YES YOU ARE RIGHT!");
        fibber.viewStatement(questionPool[i+1].statement,questionPool[i+1].context);
          });
        } else if(questionPool[i].isTrue==false){
          $(".truth-btn").click(function(){
        alert("Opps,please try again...");
        fibber.viewStatement(questionPool[i].statement,questionPool[i].context);
         });
        } 
       
        if(questionPool[i].isTrue==true){
        $(".fib-btn").click(function(){
        alert("Opps,please try again...");
        fibber.viewStatement(questionPool[i].statement,questionPool[i].context);
          });

        } else if(questionPool[i].isTrue==false){
          $(".truth-btn").click(function(){
        alert("YES YOU ARE RIGHT!");
        fibber.viewStatement(questionPool[i+1].statement,questionPool[i+1].context);
         });
        } 
   } 
}; */






















/*

---------------------------------IGNORE ALL OF THIS-------------------

fibber.viewStatement = function(){
};

fibber.processDecision = function(decision){
}

fibber.log = function(msg){
	console.log(msg);
};

fibber.loadRemoteContent = function(callback){
	
};



fibber.loadViewStatementPanel = function(){
	fibber.log("view: loadViewStatementPanel() called..");

	//setup the fib and truth buttons
	$(".fib-btn").off().on("tap", function(){
		fibber.processDecision('fib');
	});
	$(".truth-btn").off().on("tap", function(){
		fibber.processDecision('truth');
	});

	//display the current statement
	fibber.viewStatement();
};

fibber.loadInstructionsPanel = function(){
	fibber.log("view: loadInstructionsPanel() called..");

	//assume player is restarting the session
	//1. clear all variables holding session data
	fibber.clintonCounter = 0;
	fibber.trumpCounter = 0;
	fibber.activeCharacter = "";
	fibber.clintonLives = 5;
	fibber.trumpLives = 5;
	fibber.playerLives = 5;

	//2. reset any visuals that were moved/modified
};


fibber.viewFeedback = function(title, msg){

	$.afui.popup( {
	   title:title,
	   message:msg,
	   cancelText:"CONTINUE",
	   cancelCallback: function(){
	   	fibber.viewStatement();
	   },
	   cancelOnly:true
	 });

};

//setup custom on screen load functionality
	$("#instructions").on("panelload", function(){fibber.loadInstructionsPanel();});
	$("#viewstatement").on("panelload", function(){fibber.loadViewStatementPanel();});

*/