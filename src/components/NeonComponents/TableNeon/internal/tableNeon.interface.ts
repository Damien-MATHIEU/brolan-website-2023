interface ITableNeon {
  tableHeaders: Array<string>
  tableContent: Array<ITeamObject>
  propsClassName?: string
}

interface ITeamObject {
  [key: string]: any
}

export default ITableNeon
