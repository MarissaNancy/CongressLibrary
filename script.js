// / Autocomplete widget
// $(function () {
//   var formats = [
//     'maps',
//     'audio',
//     'photos',
//     'manuscripts',
//     'newspapers,
//     'film-and-videos',
//     'notated-music',
//     'websites',
//   ];
//   $('#dropdownMenu2').autocomplete({
//     source: formats,
//   });
var saveButton = document.querySelector("#bttn");
var requestUrl = "https://www.loc.gov/search/?fo=json"




saveButton.addEventListener("click", getApi);
  
function getApi(event){
    
    event.preventDefault()
    var format = document.querySelector("#format-input").value
    console.log(format)
    var searchParameters = document.querySelector("#formGroupExampleInput").value
    console.log(searchParameters)
    
    requestUrl = requestUrl + "&q=" + searchParameters + "&format=" + format
    console.log(requestUrl)

    
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
}) .then(function(data){

    var results = data.results
    console.log(results)

    for (var i = 0;  i < results.length; i++) {
        
        console.log(results[i].facets.results.description);

    }
})
}