interface ITableNeon {
  tableContent: Array<ITeamObject>
  tableHeaders?: Array<string>
  color?: 'pink' | 'aquamarine'
  propsClassName?: string
}

interface ITeamObject {
  [key: string]: string[]
}

export default ITableNeon
