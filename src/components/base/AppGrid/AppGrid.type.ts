import { AgGridReact, AgGridReactProps } from "ag-grid-react"
import { IRowNode } from "ag-grid-community"

export interface IAppGridProps extends AgGridReactProps {}

export interface TAppGrid<TData> extends AgGridReact<TData> {
  /**
   * @description Get all row data of grid
   * @returns TData[]
   */
  getData: () => TData[]
  /**
   * @description Get all row data of grid. Skip any filtered data
   * @returns TData[]
   */
  getDataAfterFilterAndSort: () => TData[]
  /**
   * @description Get all row node of grid.
   * @returns RowNode[]
   */
  getNodes: () => IRowNode<TData>[]
  getNodesAfterFilterAndSort: () => IRowNode<TData>[]
}
