interface ITableNeon {
  tableContent: Array<ITeamObject>
  tableHeaders?: Array<string>
  propsClassName?: string
}

interface ITeamObject {
  [key: string]: string[]
}

export default ITableNeon
