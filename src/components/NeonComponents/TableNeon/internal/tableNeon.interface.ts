interface ITableNeon {
  tableContent: Array<ITeamObject>
  tableHeaders?: Array<string>
  propsClassName?: string
  noHeader?: boolean
}

interface ITeamObject {
  [key: string]: any
}

export default ITableNeon
