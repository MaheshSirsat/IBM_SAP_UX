sap.ui.define(["sap/m/MessageBox",'sap/ui/core/format/DateFormat'],function(MessageBox,DateFormat){
return{
        showDatefunction(date){
            var Datef=DateFormat.getDateInstance()
            var sdate=Datef.format(date)
            MessageBox.show(sdate,{
                title: "Message"
            })
        }
}
})