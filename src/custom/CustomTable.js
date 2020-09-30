import React, { } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import MaterialTable, { MTableToolbar } from 'material-table'
import ViewColumn from '@material-ui/icons/ViewColumn';

 

export default function CustomTable({   columns, data, title = "", tableActions, hasSearch = false, hasSorting = true, hasFilters = false, emptyMessage = "Sin resultados", hasExportButton = false, exportFunction, toolbarContent, ...props }) {

  return (
    <MuiThemeProvider >
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        {...props}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              {toolbarContent}
            </div>
          ),
        }}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            firstTooltip: 'Primera página',
            lastTooltip: 'Última página',
            nextTooltip: 'Siguiente',
            previousTooltip: 'Anterior',
            labelRowsSelect: "resultados",
          },
          toolbar: {
            nRowsSelected: '{0} filas(s) seleccionadas'
          },
          header: {
            actions: '',
          },
          body: {
            emptyDataSourceMessage: emptyMessage,
            filterRow: {
              filterTooltip: 'Filtro'
            }
          }
        }}
        actions={tableActions}
        options={{
          headerStyle: {
            fontSize: 15
          },
          cellStyle: {
            fontSize: 15
          },
          filterCellStyle: {
            fontSize: 15
          },
          rowStyle: {
            fontSize: 15
          },
          filtering: hasFilters,
          search: hasSearch,
          sorting: hasSorting,
          actionsColumnIndex: -1,
          exportButton: hasExportButton,
          exportCsv: () => {
            exportFunction()
          }
        }}
      />
    </MuiThemeProvider>
  )
}