class feedbackWidget{
    constructor(elementId) {
        this._elementId = elementId;
    }
    get elementId(){
        return this._elementId;
    }
    log(message){
        

        localStorage.setItem(JSON.stringify("feedback_widget"), JSON.stringify(message))

    
        

    }
    removeLog(message, id){
        localStorage.removeItem(id, JSON.stringify(message))
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