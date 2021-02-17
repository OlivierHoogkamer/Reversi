class feedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }
    get elementId(){
        return this._elementId;
    }
    log(message){
        
        var oldItems = JSON.parse(localStorage.getItem('feedback_widget')) || []; // kijkt of er al dingen staan
        if (oldItems.length <= 10) { // niet meer dan 10 items!
            var newItem = 
            {
            message
            };
            
            oldItems.push(newItem);
            
            localStorage.setItem('feedback_widget', JSON.stringify(oldItems));
        }else {
            oldItems.shift(); // haalt de eerste entry uit de array
            var newItem = 
            {
            message
            };
            
            oldItems.push(newItem);
            
            localStorage.setItem('feedback_widget', JSON.stringify(oldItems));
        }   
    }
    show(message, type){
        
        
        if(type == 'success'){
            $(".feedback-widget").text(message);
            $(".feedback-widget").addClass('success');
            $(".feedback-widget").removeClass('error');

        }
        if(type == 'error'){
            $(".feedback-widget").text(message);
            $(".feedback-widget").addClass('error');
            $(".feedback-widget").removeClass('success');
        }



       
        var logMessage = {type, message};

   
        this.log(logMessage);
        
    }
    hide(type){
        $(".feedback-widget").removeClass('success');
        $(".feedback-widget").removeClass('error');
    }
    
}