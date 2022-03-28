class SmartTable {
    table;
    body;
    data;

    thead;
    tbody;

    constructor(id, name, dataTable) {
        let parent = document.getElementById(id);
        this.table = document.createElement("table");

        this.data = dataTable;


        this.thead = document.createElement("thead");
        this.tbody = document.createElement("tbody");

        this.addRow(this.data.rows.head, true);

        for (let i = 0; i < this.data.rows.others.length; i++) {
            this.addRow(this.data.rows.others[i])
        }

        this.table.append(this.thead);
        this.table.append(this.tbody);
        parent.append(this.table);
    }

    addRow(columnsText, isHeader = false) {
        let row = SmartTable.createNewRow(columnsText, isHeader);

        if(isHeader)
        {
            this.thead.append(row);
        }
        else
        {
            this.tbody.append(row);   
        }
    }

    static createNewRow(columnsText, isHeader = false) {
        let row = document.createElement("tr");


        for (let i = 0; i < columnsText.length; i++) {
            let column;

            if (isHeader)
                column = document.createElement("th");
            else
                column = document.createElement("td");

            column.textContent = columnsText[i];
            row.append(column);
        }

        return row;
    }
}