let table = new SmartTable("my-table", "multiply", 
{
    caption: "My friends",
    rows:
    {
        head: ["Name", "Surname", "Country",  "Age"],
        
        others:
        [
            ["Aleksej", "Kungurov", "Rusija", "13"],
            ["Mihail", "Monahov", "Rusija", "18"]
        ]
    },
    styles:
    {
        padding: [10, 20]
    }
})

let btnCreate =  document.getElementById("create");

btnCreate.addEventListener("click", function()
{
    table.addRow(["123", "123", "123", "123"])
});