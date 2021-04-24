$(function () {

    $("#designation_type").change(function(){
        console.log("#Designation selected")
        typeOrDepartment()
    })
})

function typeOrDepartment(listIndex)
{
    document.getElementById("deptOrType").options.length=0;
    switch(listIndex)
    {
        case "hod":
            document.getElementById("deptOrType").options[0]=new Option("Select Type / Department","");
            document.getElementById("deptOrType").options[1]=new Option("CSE","3");
            document.getElementById("deptOrType").options[2]=new Option("EE","4");
            document.getElementById("deptOrType").options[3]=new Option("ME","5");
            document.getElementById("deptOrType").options[4]=new Option("CE","6");
            document.getElementById("deptOrType").options[5]=new Option("CH","7");
            break;
        
        case "dean":
            document.getElementById("deptOrType").options[0]=new Option("Select Type / Department","12");
            document.getElementById("deptOrType").options[1]=new Option("Faculty Affairs","8");
            document.getElementById("deptOrType").options[2]=new Option("Research","9");
            document.getElementById("deptOrType").options[3]=new Option("Student Affairs","10");
            document.getElementById("deptOrType").options[4]=new Option("Academic Affairs","11");
            break;
    }
}