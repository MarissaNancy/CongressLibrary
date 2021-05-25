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
var requestUrl = "https://www.loc.gov/"
var searchParameters = document.querySelector("#formGroupExampleInput").value;
var format = 
console.log(searchParameters)

saveButton.addEventListener("click", getApi);
  
function getApi(){
    
    event.preventDefault
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
})
}