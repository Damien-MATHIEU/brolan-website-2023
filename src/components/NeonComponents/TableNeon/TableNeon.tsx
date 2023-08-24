import React from 'react'
import styles from './internal/tableNeon.module.scss'
import ITableNeon from './internal/tableNeon.interface'

function TableNeon({ tableHeaders, tableContent, propsClassName, noHeader = false }: ITableNeon) {
  return (
    <div className={`${styles.container} ${styles.shadow} ${propsClassName}`}>
      <table className={`${styles.table}`}>
        {noHeader || !tableHeaders ? null : (
          <thead>
            <tr>
              {tableHeaders.map((element, index) => {
                if (typeof element !== 'string') {
                  return
                }
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
        )}

        <tbody className={styles.tableBody}>
          {tableContent.map((teamObject, indexOne) => {
            const isEliminated: boolean = teamObject.eliminated
            return (
              <tr key={indexOne}>
                <td className={styles.tableData}>
                  <p className={`${styles.text} ${isEliminated && styles.eliminated}`}>
                    {Object.keys(teamObject)[0]}
                  </p>
                </td>
                {Object.values(teamObject).map((players, indexTwo) => {
                  if (typeof players !== 'object') {
                    return
                  }
                  return (
                    <td className={styles.tableData} key={indexTwo}>
                      <p className={`${styles.text} ${isEliminated && styles.eliminated}`}>
                        {players.join(' & ')}
                      </p>
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
