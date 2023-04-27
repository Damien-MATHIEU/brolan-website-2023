import React from 'react'
import styles from './internal/tableNeon.module.scss'
import ITableNeon from './internal/tableNeon.interface'

function TableNeon({ tableHeaders, tableContent, propsClassName }: ITableNeon) {
  return (
    <div className={`${styles.container} ${styles.shadow} ${propsClassName}`}>
      <table className={`${styles.table}`}>
        <thead>
          <tr>
            {tableHeaders.map((element, index) => {
              return (
                <th
                  key={index}
                  className={`${styles.tableHeader} ${
                    index % 2 === 0 ? styles.glowPinkHeader : styles.glowAquamarineHeader
                  }`}>
                  <h4 className={styles.text}>{element}</h4>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {tableContent.map((teamObject, indexOne) => {
            return (
              <tr key={indexOne}>
                <td className={styles.tableData}>
                  <p className={styles.text}>{Object.keys(teamObject)}</p>
                </td>
                {Object.values(teamObject).map((players, indexTwo) => {
                  return (
                    <td className={styles.tableData} key={indexTwo}>
                      <p className={styles.text}>{players.join(' & ')}</p>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableNeon
