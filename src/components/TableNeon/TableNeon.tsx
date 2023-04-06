import React from 'react'
import styles from './internal/tableNeon.module.scss'
import ITableNeon from './internal/tableNeon.interface'

function TableNeon({
  tableHeaders = [],
  tableContent = [],
  color = 'pink',
  propsClassName
}: ITableNeon) {
  return (
    <div className={`${styles.container} ${propsClassName}`}>
      <table
        className={`${styles.table} ${
          color === 'aquamarine' ? styles.tableAquamarine : styles.tablePink
        }`}>
        <thead>
          <tr>
            {tableHeaders?.map((element, index) => {
              return (
                <th key={index} className={styles.tableHeader}>
                  {element}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tableContent.map((element, index) => {
            return (
              <tr key={index}>
                <td className={styles.tableData}>{element}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableNeon
