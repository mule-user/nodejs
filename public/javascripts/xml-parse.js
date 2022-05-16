var xml;
document.getElementById("middlediv").style.display = "none";
document.getElementById("bottomdiv").style.display = "none";

let convertToProgramCallDef = () =>{
xml=document.getElementById("inputXML").value;
    $.ajax({
        type: 'POST',
     //   url: "http://localhost:8080/api/from-string",
        url: "http://pcmlconverterv5-env.eba-jznrg33u.ap-south-1.elasticbeanstalk.com/api/from-string",
        data: xml,
        success: function (res) {
            var node = document.getElementById('outputXML');
            node.innerText = res;
            document.getElementById("middlediv").style.display = "block";
            convertToRaml(res);
        },
        error: function (e) {
            console.log(e);
        },
        contentType: "text/plain;charset=UTF-8"
    });
}

$("#convert").on("click", () =>{
    convertToProgramCallDef()
})

let convertToRaml = (raml) =>{
    $.ajax({
        type: 'POST',
     //   url: "http://localhost:8080/api/from-string-to-raml",
        url: "http://pcmlconverterv5-env.eba-jznrg33u.ap-south-1.elasticbeanstalk.com/api/from-string",
        data: raml,
        success: function (res) {
            var node = document.getElementById('outputXMLR');
            node.innerText = res;
            document.getElementById("bottomdiv").style.display = "block";
        },
        error: function (e) {
            console.log(e);
        },
        contentType: "text/plain;charset=UTF-8"
    });
}
