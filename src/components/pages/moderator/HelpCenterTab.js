import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

function HelpCenterTab() {
    return (
      <MaterialTable
        title="Pending Question Queue"
        columns={[
          { title: 'id', field: 'id' },
          { title: 'question', field: 'question' },
          { title: 'Reply', field: 'Reply', type: 'numeric' },
          {
            title: 'status',
            field: 'status',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { id: 'Mehmet', question: 'Baran', },
          { id: 'Zerya Betül', question: 'Baran',  },
        ]}        
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.id)
          }
        ]}
        
      />
      
    )
  }
export default HelpCenterTab;