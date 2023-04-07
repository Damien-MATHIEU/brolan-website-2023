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
    <div className={`${styles.container} ${styles.shadow} ${propsClassName}`}>
      <table
        className={`${styles.table} ${
          color === 'aquamarine' ? styles.tableAquamarine : styles.tablePink
        }`}>
        <thead>
          <tr>
            {tableHeaders?.map((element, index) => {
              return (
                <th
                  key={index}
                  className={`${styles.tableHeader} ${
                    index % 2 === 0 ? styles.glowPinkHeader : styles.glowAquamarineHeader
                  }`}>
                  {element}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {tableContent.map((teamObject, indexOne) => {
            console.log(teamObject)
            return (
              <tr key={indexOne}>
                <td
                  className={`${styles.tableData} ${styles.glowPinkData} ${
                    indexOne === tableContent.length - 1 ? styles.glowPinkDataLastChild : undefined
                  }`}>
                  {Object.keys(teamObject)}
                </td>
                {Object.values(teamObject).map((players, indexTwo) => {
                  // console.log(players)
                  return (
                    <td
                      className={`${styles.tableData} ${styles.glowAquamarineData} ${
                        indexOne === tableContent.length - 1
                          ? styles.glowAquamarineDataLastChild
                          : undefined
                      }`}
                      key={indexTwo}>
                      {players.join(' & ')}
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
