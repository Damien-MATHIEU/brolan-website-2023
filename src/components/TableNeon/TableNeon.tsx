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
        <tr>
          {tableHeaders?.map((element, index) => {
            return (
              <th key={index} className={styles.tableHeader}>
                {element}
              </th>
            )
          })}
        </tr>

        {tableContent.map((element, index) => {
          return (
            <tr key={index}>
              <td className={styles.tableData}>{element}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default TableNeon
